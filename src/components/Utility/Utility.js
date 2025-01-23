import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
};

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        console.log(id, "already exists in the read list");
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr); // Correct method

        toast('the book is added in your book list!!')
    }
};



// Function to retrieve the wish list from localStorage
const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list'); // Correct key
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr); // Corrected variable name to avoid conflict
        return storedList;
    } else {
        return [];
    }
};

// Function to add an item to the wish list in localStorage
const addToStoredWishList = (id) => { // Added `id` as a parameter
    const storedList = getStoredWishList();

    if (storedList.includes(id)) {
        console.log(id, "already exists in the wish list");
    } else {
        storedList.push(id); // Add new id to the list
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr); // Corrected key
    }
};




export { addToStoredReadList  ,addToStoredWishList,getStoredReadList};
