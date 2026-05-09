import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductValidator } from '../../../../validators/productValidator';
import { useForm } from 'react-hook-form';
import { useAdd } from '../../../../customHooks/crud/getAdd';
import endPoints from '../../../../api/endpoints';
import './postAdd.css';


const PostAdd = () => {

  const { loading, postData, error: apiError, data } = useAdd(endPoints.crud.add);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProductValidator),
  });

  const onSubmit = (data) => {
    postData(data)
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Add a post</h2>
        <div className="form-group">
          <input
            {...register("title")}
            className="input"
            type="text"
            placeholder="Enter title"
          />
          <span className="error">{errors?.title?.message}</span>
        </div>

        
        <div className="form-group">
          <input
              {...register("subtitle")}
              className="input"
              type="text"
              placeholder="Enter subtitle"
            />
          <span className="error"> {errors?.subtitle?.message} </span>
        </div>

        
        <div className="form-group">
          <textarea
            {...register("content")}
              className="input"
              type="text"
              placeholder="Enter Content"
            />
          <span className="error"> {errors?.content?.message} </span>
        </div>

        <button className="btn">
          submit
        </button>
      </form>
    </>
  )
}

export default PostAdd;
