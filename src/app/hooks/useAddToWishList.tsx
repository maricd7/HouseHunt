import { useState, useEffect, useCallback } from "react";
import { Property } from "../types/Property";

const useAddToWishlist = () => {
  const [wishlist, setWishlist] = useState<Property[]>(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = useCallback((property: Property) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.some((item) => item.id === property.id)) {
        return [...prevWishlist, property];
      }
      return prevWishlist;
    });
  }, []);

  return { wishlist, addToWishlist };
};

export default useAddToWishlist;
