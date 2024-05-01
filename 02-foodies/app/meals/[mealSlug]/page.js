const MealPageDetail = ({ params }) => {
  return (
    <main>
      <h1>Dynamic Meal Page</h1>
      <h2>{params.mealSlug}</h2>
    </main>
  );
};

export default MealPageDetail;
