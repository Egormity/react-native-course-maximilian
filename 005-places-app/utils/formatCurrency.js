export const formatCurrency = value =>
    value.toLocaleString(navigator.language, { style: "currency", currency: "USD" });
