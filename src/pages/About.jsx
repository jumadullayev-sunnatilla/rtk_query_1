import React from "react";
import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategotyQuery,
} from "../redux/api/product-api";

const About = () => {
  const { data, isError, isLoading } = useGetCategotyQuery();
  const [createCategory, { isLoading: isCreateLoading }] =
    useCreateCategoryMutation();
  const [deleteCategory, { isLoading: isDeleteLoading }] =
    useDeleteCategoryMutation();

  console.log(data);

  const product = data?.map((pro) => (
    <div className="border 800 p-3 bg-yellow-500 w-[300px]" key={pro.id}>
      <img src={pro.img} alt="" className="w-full h-44 object-contain" />
      <h2 className="">{pro.title}</h2>
      <p>{pro.desc}</p>
      <button
        onClick={() => handelDeleteCategory(pro.id)}
        className="px-4 py-2 bg-slate-800 text-white rounded-full mb-5"
      >
        {isDeleteLoading ? "Loading...?" : "Delete"}
      </button>
      <hr />
    </div>
  ));
  const handleCreateCategory = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const newCategory = Object.fromEntries(data);
    createCategory(newCategory)
      .unwrap()
      .then((res) => {
        e.target.reset();
      });
  };
  const handelDeleteCategory = (id) => {
    deleteCategory(id);
  };

  return (
    <div className="">
      <h2 className="text-center text-3xl text-red-700 ">About</h2>
      <div>
        <form
          className="flex flex-col gap-4 mb-6"
          onSubmit={handleCreateCategory}
          action=""
        >
          <input
            className="p-4 border rounded-xl bg-slate-500 text-2xl  w-[500px]"
            type="text"
            required
            placeholder="title"
            name="title"
          />{" "}
          <input
            className="p-4 border rounded-xl bg-slate-500 text-2xl w-[500px]"
            required
            type="text"
            placeholder="desc"
            name="desc"
          />
          <input
            className="p-4 border rounded-xl bg-slate-500 text-2xl w-[500px]"
            type="text"
            required
            placeholder="image"
            name="img"
          />
          <button className="bg-yellow-400 border rounded-3xl px-5 py-3 text-3xl w-[300px]">
            {isCreateLoading ? "Loading..." : "Create"}
          </button>
        </form>
      </div>
      {isLoading && (
        <p className="text-center text-3xl text-red-700 font-semibold ">
          Loading.....
        </p>
      )}
      <div className="flex flex-wrap gap-2 justify-center ">{product}</div>
    </div>
  );
};

export default About;
