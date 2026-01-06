import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Pharmaceuticals from './Pharmaceuticals';
import Nutraceuticals from './Nutraceuticals';
import FoodGrains from './FoodGrains';
import Chemicals from './Chemicals';

const Products = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Normalize category string to handle cases roughly
  const normalizedCategory = category?.toLowerCase();

  // If no category is present, or if it explicitly matches pharmaceutical, render that.
  // Note: strict check might be needed if you want specific URL structure.

  if (normalizedCategory === 'nutraceuticals' || normalizedCategory === 'nutraceutical-food-supplement' || normalizedCategory?.includes('nutra')) {
    return <Nutraceuticals />;
  }

  if (normalizedCategory === 'food-grains' || normalizedCategory?.includes('food') || normalizedCategory?.includes('grains')) {
    return <FoodGrains />;
  }

  if (normalizedCategory === 'chemicals' || normalizedCategory?.includes('chemical') || normalizedCategory?.includes('fine')) {
    return <Chemicals />;
  }

  // Default to Pharmaceuticals for other cases or explicit pharmaceutical path
  return <Pharmaceuticals />;
};

export default Products;
