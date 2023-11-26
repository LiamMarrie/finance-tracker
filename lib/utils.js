'use client';
'use strict';

export const currencyFormatter = (amount) => {
    const formatter = Intl.NumberFormat("en", {
        currency: "CAD",
        style: "currency",
    })
    return formatter.format(amount);
}