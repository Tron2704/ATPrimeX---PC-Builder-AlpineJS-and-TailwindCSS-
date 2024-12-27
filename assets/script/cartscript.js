document.addEventListener('alpine:init', () => {
    Alpine.data('cartData', () => ({
        orders: [],


        loadCartData() {
            // Load orders from localStorage
            this.orders = JSON.parse(localStorage.getItem('orders')) || [];
            console.log(this.orders)
        },

        getTotalCartPrice() {
            return this.orders.reduce((total, order) => {
                return total + (order.items.TotalPrice || 0);
            }, 0);
        },

        clearCart() {
            localStorage.removeItem('orders');
            this.orders = [];
        },

        generatePDF() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            let yPos = 20; // Initial vertical position
            const rowHeight = 12; // Height of the row
            const lineHeight = 6; // Line height for wrapping
            const pageHeight = doc.internal.pageSize.height;
            const margin = 14; // Left margin for layout

            // Table column positions and widths
            const col1 = margin;            // Item column
            const col2 = margin + 60;       // Selection column
            const col3 = margin + 130;      // Price column
            const colWidths = [60, 70, 50]; // Widths for each column

            // Function to add a new page when needed
            const checkPageBreak = (extraHeight = 0) => {
                if (yPos + extraHeight >= pageHeight - margin) {
                    doc.addPage();
                    yPos = margin;
                    addHeader();
                }
            };

            // Function to add a header
            const addHeader = () => {
                doc.setFontSize(18);
                doc.setFont('helvetica', 'bold');
                doc.text('Cart Summary', doc.internal.pageSize.width / 2, yPos, { align: 'center' });
                yPos += 20;  // Increased space after header for better layout

                // Table header with background fill
                doc.setFontSize(12);
                doc.setFillColor(230, 230, 250); // Light fill color
                doc.rect(col1, yPos, colWidths[0] + colWidths[1] + colWidths[2], rowHeight, 'F');
                doc.text('Item', col1 + colWidths[0] / 2, yPos + 7, { align: 'center' });
                doc.text('Selection', col2 + colWidths[1] / 2, yPos + 7, { align: 'center' });
                doc.text('Price (₹)', col3 + colWidths[2] / 2, yPos + 7, { align: 'center' });
                yPos += rowHeight;
            };

            addHeader();

            this.orders.forEach((order, orderIndex) => {
                // Place the order heading above the table
                doc.setFontSize(14);
                doc.setFont('helvetica', 'normal');
                doc.text(`Order ${orderIndex + 1}`, margin, yPos-20);
                  // Move down after the "Order" heading

                checkPageBreak();

                Object.entries(order.items).forEach(([key, item]) => {
                    if (key !== 'TotalPrice') {
                        // Wrap the middle column text (Selection)
                        const selectionText = doc.splitTextToSize(item.label, colWidths[1] - 6);
                        const rowHeightWithWrap = Math.max(rowHeight, selectionText.length * lineHeight + 4);

                        checkPageBreak(rowHeightWithWrap);

                        // Draw cell borders
                        doc.rect(col1, yPos, colWidths[0], rowHeightWithWrap); // Item cell
                        doc.rect(col2, yPos, colWidths[1], rowHeightWithWrap); // Selection cell
                        doc.rect(col3, yPos, colWidths[2], rowHeightWithWrap); // Price cell

                        // Insert centered text
                        doc.setFontSize(12);
                        doc.text(key, col1 + colWidths[0] / 2, yPos + rowHeightWithWrap / 2, { align: 'center' });
                        doc.text(selectionText, col2 + colWidths[1] / 2, yPos + rowHeightWithWrap / 2, { align: 'center' });
                        doc.text(`₹${item.price.toLocaleString()}`, col3 + colWidths[2] / 2, yPos + rowHeightWithWrap / 2, { align: 'center' });

                        yPos += rowHeightWithWrap;
                    }
                });

                // Draw the total price row (aligned to the right)
                checkPageBreak();
                doc.setFontSize(12);
                doc.setFont('helvetica', 'bold');
                doc.setFillColor(240, 240, 240); // Light gray fill for total row
                doc.rect(col1, yPos, colWidths[0] + colWidths[1] + colWidths[2], rowHeight, 'F');
                doc.text(`Total Price: ₹${order.items.TotalPrice.toLocaleString()}`, doc.internal.pageSize.width - margin - 50, yPos + 7, { align: 'right' });
                yPos += rowHeight * 1.5; // Extra space after total row

                checkPageBreak();
            });

            // Save the PDF
            doc.save('cart_summary.pdf');
        }

    }));
});