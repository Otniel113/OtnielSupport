document.addEventListener('DOMContentLoaded', () => {

    // --- TRANSLATION DATA ---
    // Object containing all text translations for English and Indonesian
    const translations = {
        en: {
            title: "Support Me!",
            description: "If you like my contents or my works, you can consider to support me through one of the platforms below.",
            trakteerPayment: "QRIS, Bank Transfer, E-Wallet, Credit/Debit Card (All Indonesian)",
            saweriaPayment: "QRIS, GoPay, OVO, DANA, LinkAja",
            kofiPayment: "PayPal, Visa, Mastercard",
            patreonPayment: "PayPal, Credit/Debit Card, Apple Pay (USD), Venmo (US)"
        },
        id: {
            title: "Dukung Saya!",
            description: "Jika kalian suka konten atau kerjaan saya, maka kalian bisa untuk membantu donasi ke saya melalui berbagai platform di bawah ini.",
            trakteerPayment: "QRIS, Transfer Bank, E-Wallet, Kartu Kredit/Debit",
            saweriaPayment: "QRIS, GoPay, OVO, DANA, LinkAja",
            kofiPayment: "PayPal, Visa, Mastercard",
            patreonPayment: "PayPal, Kartu Kredit/Debit, Apple Pay (USD)"
        }
    };

    // --- DOM ELEMENTS ---
    // Get references to all elements that need their text changed
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');
    const trakteerPaymentElement = document.getElementById('trakteer-payment');
    const saweriaPaymentElement = document.getElementById('saweria-payment');
    const kofiPaymentElement = document.getElementById('kofi-payment');
    const patreonPaymentElement = document.getElementById('patreon-payment');
    const langEnButton = document.getElementById('lang-en');
    const langIdButton = document.getElementById('lang-id');

    // --- FUNCTIONS ---
    /**
     * Updates the text content of the page based on the selected language.
     * @param {string} lang - The selected language ('en' or 'id').
     */
    const setLanguage = (lang) => {
        const langData = translations[lang];

        // Update text content of each element
        titleElement.textContent = langData.title;
        descriptionElement.textContent = langData.description;
        trakteerPaymentElement.textContent = langData.trakteerPayment;
        saweriaPaymentElement.textContent = langData.saweriaPayment;
        kofiPaymentElement.textContent = langData.kofiPayment;
        patreonPaymentElement.textContent = langData.patreonPayment;

        // Update active state of language buttons
        if (lang === 'en') {
            langEnButton.classList.add('active');
            langIdButton.classList.remove('active');
        } else {
            langIdButton.classList.add('active');
            langEnButton.classList.remove('active');
        }
    };

    // --- EVENT LISTENERS ---
    // Add click event listeners to the language buttons
    langEnButton.addEventListener('click', () => setLanguage('en'));
    langIdButton.addEventListener('click', () => setLanguage('id'));

    // --- INITIALIZATION ---
    // Set the default language to English when the page loads
    setLanguage('en');
});
