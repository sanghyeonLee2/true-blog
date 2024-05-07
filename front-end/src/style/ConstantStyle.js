import styled from "styled-components";

export const SearchBoxContainer = styled.div`
  .search-icon{
    width: 20px;
    height: 20px;
    background-image: url("data:image/svg+xml,%0A%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.3243 4.98201C14.3159 6.97369 14.3159 10.2028 12.3243 12.1945C10.3326 14.1862 7.10345 14.1862 5.11177 12.1945C3.1201 10.2028 3.1201 6.97369 5.11177 4.98201C7.10345 2.99034 10.3326 2.99034 12.3243 4.98201ZM14.8612 12.8929C16.9167 9.96687 16.6367 5.90038 14.0213 3.28496C11.0924 0.356024 6.34365 0.356024 3.41472 3.28496C0.485785 6.21389 0.485785 10.9626 3.41472 13.8916C6.07942 16.5563 10.2504 16.7967 13.1869 14.6127L17.8336 19.2595C18.3022 19.7281 19.062 19.7281 19.5307 19.2595C19.9993 18.7908 19.9993 18.031 19.5307 17.5624L14.8612 12.8929Z' fill='rgba(255,255,255,0.5)'/%3E%3C/svg%3E%0A");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    left: 89%;
    transform: translateY(-50%);
    transition: all 150ms;
  }
  .search-input{
    width: 360px;
    height: 54px;
    font-size: 16px;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.5);
    padding: 0 20px 2px 55px;
    border-radius: 100px;
    transition: all 150ms;
  }
  position: relative;
`