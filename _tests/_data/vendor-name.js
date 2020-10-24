var vendorName = '';

function setVendorName(email) {
    vendorName = email;
}

function getVendorName() {
    return vendorName;
}

export { setVendorName, getVendorName };