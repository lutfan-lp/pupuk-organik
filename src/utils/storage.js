export const getUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
};

export const saveUsers = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("currentUser"));
};

export const setCurrentUser = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
};

export const logoutUser = () => {
    localStorage.removeItem("currentUser");
};

// Orders
export const getOrders = () => {
    return JSON.parse(localStorage.getItem("orders")) || [];
};

export const saveOrders = (orders) => {
    localStorage.setItem("orders", JSON.stringify(orders));
};

// Reviews
export function getReviews() {
    return JSON.parse(localStorage.getItem("reviews")) || [];
}

export function saveReviews(rev) {
    localStorage.setItem("reviews", JSON.stringify(rev));
}
