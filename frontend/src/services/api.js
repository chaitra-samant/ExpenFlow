const BASE_URL = 'http://localhost:5000/api/invoices';

export const addInvoice = async (user, invoiceData) => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, data: invoiceData })
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error adding invoice:', error);
        throw error;
    }
};

export const updateInvoice = async (invoiceNumber, user, updatedData) => {
    try {
        const response = await fetch(`${BASE_URL}/${invoiceNumber}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, data: updatedData })
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error updating invoice:', error);
        throw error;
    }
};