import { darken } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  ::-webkit-scrollbar {
    background: transparent;
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #343a40;
    border-radius: 4px;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    background-color: #F5F5F5;
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: #202020;
    background-color: #FFFFFF;

    :hover{
      outline: 0 !important;
      box-shadow: none !important;
    }

    :focus{
      outline: 0 !important;
      box-shadow: none !important;
    }
  }

  body{
    background-color: #F5F5F5;
    margin: 0 auto;
    -webkit-text-size-adjust: none;
  }

  a{
    text-decoration: none !important;
    color: #202020;
  }

  .text-primary{
    color: #202020 !important;
  }

  a.text-primary:hover{
    color: ${darken(0.05, '#202020')} !important;
  }

  .bg-primary{
    background-color: #202020 !important;
  }

  .btn{
    border-radius: 10px;
  }

  .btn-primary{
    border-color: #ff6900 !important;
    background-color: #ff6900 !important;
    color: #ffffff !important;

    :hover{
      border-color: ${darken(0.05, '#ff6900')} !important;
      background-color: ${darken(0.05, '#ff6900')} !important;
    }
  }

  .modal-dialog {
    max-width: 500px;
    width: 95%;
    margin: 1.75rem auto;
    }

  .text-secondary{
    color: #707070 !important;
  }

  a.text-secondary:hover{
    color: ${darken(0.05, '#707070')} !important;
  }

  .bg-secondary{
    background-color: #707070 !important;
  }

  .btn-secondary{
    border-color: #707070 !important;
    background-color: #707070 !important;
    color: #ffffff !important;

    :hover{
      border-color: ${darken(0.05, '#707070')} !important;
      background-color: ${darken(0.05, '#707070')} !important;
    }
  }

  .color-gray-blue{
    color: #8692A6 !important;
  }

  .color-blue{
    color: #41A7FE !important;
  }

  .bg-android-green{
    background-color: #A1C64D;
  }

  .border-none{
    border: none;
  }

  .color-onyx{
    color: #414142;
  }

  .bg-onyx{
    background-color: #414142;
    color: #FFFFFF;
  }

  .bg-onyx-outline{
    border: 1px solid #414142;
    color: #414142;
  }

  .color-gray{
    color: #BDBDBD;
  }

  .bg-dark-gray{
    background-color: #999999;
  }

  .swal2-container{
    z-index: 1500;
  }

  .ql-align-right{
    text-align: right;
  }

  .ql-align-center{
    text-align: center;
  }

  /* COMPLEMENTO BS5 */
  body{
    .fw-medium {
      font-weight: 500 !important;
    }

    .fw-semibold {
      font-weight: 600 !important;
    }

    .h1, .h2, .h3, .h4, .h5, .h6,
    .h1-sm, .h2-sm, .h3-sm, .h4-sm, .h5-sm, .h6-sm,
    .h1-md, .h2-md, .h3-md, .h4-md, .h5-md, .h6-md,
    .h1-lg, .h2-lg, .h3-lg, .h4-lg, .h5-lg, .h6-lg,
    .h1-xl, .h2-xl, .h3-xl, .h4-xl, .h5-xl, .h6-xl,
    .h1-xxl, .h2-xxl, .h3-xxl, .h4-xxl, .h5-xxl, .h6-xxl {
      margin-bottom: 0.5rem;
      font-weight: 500;
      line-height: 1.2;
    }

    .display-1 {
      font-size: 6rem;
      font-weight: 300;
      line-height: 1.2;
    }

    .display-2 {
      font-size: 5.5rem;
      font-weight: 300;
      line-height: 1.2;
    }

    .display-3 {
      font-size: 4.5rem;
      font-weight: 300;
      line-height: 1.2;
    }

    .display-4 {
      font-size: 3.5rem;
      font-weight: 300;
      line-height: 1.2;
    }

    .h1 {
      font-size: 2.5rem;
    }

    .h2 {
      font-size: 2rem;
    }

    .h3 {
      font-size: 1.75rem;
    }

    .h4 {
      font-size: 1.5rem;
    }

    .h5 {
      font-size: 1.25rem;
    }

    .h6 {
      font-size: 1rem;
    }

    .w-25 {
      width: 25% !important;
    }

    .w-50 {
      width: 50% !important;
    }

    .w-75 {
      width: 75% !important;
    }

    .w-100 {
      width: 100% !important;
    }

    .w-auto {
      width: auto !important;
    }

    .h-25 {
      height: 25% !important;
    }

    .h-50 {
      height: 50% !important;
    }

    .h-75 {
      height: 75% !important;
    }

    .h-100 {
      height: 100% !important;
    }

    .h-auto {
      height: auto !important;
    }

    .mw-100 {
      max-width: 100% !important;
    }

    .mh-100 {
      max-height: 100% !important;
    }

    .min-vw-100 {
      min-width: 100vw !important;
    }

    .min-vh-100 {
      min-height: 100vh !important;
    }

    .vw-100 {
      width: 100vw !important;
    }

    .vh-100 {
      height: 100vh !important;
    }

    .small {
      font-size: 90%;
      font-weight: 400;
    }

    .normal{
      font-size: 100%;
    }

    .big{
      font-size: 120%;
    }

    .m-n1 {
      margin: -0.25rem !important;
    }
    .m-n2 {
      margin: -0.5rem !important;
    }
    .m-n3 {
      margin: -1rem !important;
    }
    .m-n4 {
      margin: -1.5rem !important;
    }
    .m-n5 {
      margin: -3rem !important;
    }

    .mt-n1 {
      margin-top: -0.25rem !important;
    }
    .mt-n2 {
        margin-top: -0.5rem !important;
    }
    .mt-n3 {
        margin-top: -1rem !important;
    }
    .mt-n4 {
        margin-top: -1.5rem !important;
    }
    .mt-n5 {
        margin-top: -3rem !important;
    }

    .me-n1 {
      margin-right: -0.25rem !important;
    }
    .me-n2 {
        margin-right: -0.5rem !important;
    }
    .me-n3 {
        margin-right: -1rem !important;
    }
    .me-n4 {
        margin-right: -1.5rem !important;
    }
    .me-n5 {
        margin-right: -3rem !important;
    }

    .mb-n1 {
      margin-bottom: -0.25rem !important;
    }
    .mb-n2 {
        margin-bottom: -0.5rem !important;
    }
    .mb-n3 {
        margin-bottom: -1rem !important;
    }
    .mb-n4 {
        margin-bottom: -1.5rem !important;
    }
    .mb-n5 {
        margin-bottom: -3rem !important;
    }

    .ms-n1 {
      margin-left: -0.25rem !important;
    }
    .ms-n2 {
        margin-left: -0.5rem !important;
    }
    .ms-n3 {
        margin-left: -1rem !important;
    }
    .ms-n4 {
        margin-left: -1.5rem !important;
    }
    .ms-n5 {
        margin-left: -3rem !important;
    }

    @media (min-width: 576px) {
      .fw-sm-medium {
        font-weight: 500 !important;
      }

      .fw-sm-semibold {
        font-weight: 600 !important;
      }

      .display-sm-1 {
        font-size: 6rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-sm-2 {
        font-size: 5.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-sm-3 {
        font-size: 4.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-sm-4 {
        font-size: 3.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .h1-sm {
        font-size: 2.5rem;
      }

      .h2-sm {
        font-size: 2rem;
      }

      .h3-sm {
        font-size: 1.75rem;
      }

      .h4-sm {
        font-size: 1.5rem;
      }

      .h5-sm {
        font-size: 1.25rem;
      }

      .h6-sm {
        font-size: 1rem;
      }

      .w-sm-25 {
        width: 25% !important;
      }

      .w-sm-50 {
        width: 50% !important;
      }

      .w-sm-75 {
        width: 75% !important;
      }

      .w-sm-100 {
        width: 100% !important;
      }

      .w-sm-auto {
        width: auto !important;
      }

      .h-sm-25 {
        height: 25% !important;
      }

      .h-sm-50 {
        height: 50% !important;
      }

      .h-sm-75 {
        height: 75% !important;
      }

      .h-sm-100 {
        height: 100% !important;
      }

      .h-sm-auto {
        height: auto !important;
      }

      .mw-sm-100 {
        max-width: 100% !important;
      }

      .mh-sm-100 {
        max-height: 100% !important;
      }

      .min-vw-sm-100 {
        min-width: 100vw !important;
      }

      .min-vh-sm-100 {
        min-height: 100vh !important;
      }

      .vw-sm-100 {
        width: 100vw !important;
      }

      .vh-sm-100 {
        height: 100vh !important;
      }

      .small-sm {
        font-size: 80%;
        font-weight: 400;
      }

      .normal-sm {
        font-size: 100%;
      }

      .big-sm {
        font-size: 120%;
      }

      .m-sm-n1 {
        margin: -0.25rem !important;
      }
      .m-sm-n2 {
        margin: -0.5rem !important;
      }
      .m-sm-n3 {
        margin: -1rem !important;
      }
      .m-sm-n4 {
        margin: -1.5rem !important;
      }
      .m-sm-n5 {
        margin: -3rem !important;
      }

      .mt-sm-n1 {
        margin-top: -0.25rem !important;
      }
      .mt-sm-n2 {
          margin-top: -0.5rem !important;
      }
      .mt-sm-n3 {
          margin-top: -1rem !important;
      }
      .mt-sm-n4 {
          margin-top: -1.5rem !important;
      }
      .mt-sm-n5 {
          margin-top: -3rem !important;
      }

      .me-sm-n1 {
        margin-right: -0.25rem !important;
      }
      .me-sm-n2 {
          margin-right: -0.5rem !important;
      }
      .me-sm-n3 {
          margin-right: -1rem !important;
      }
      .me-sm-n4 {
          margin-right: -1.5rem !important;
      }
      .me-sm-n5 {
          margin-right: -3rem !important;
      }

      .mb-sm-n1 {
        margin-bottom: -0.25rem !important;
      }
      .mb-sm-n2 {
          margin-bottom: -0.5rem !important;
      }
      .mb-sm-n3 {
          margin-bottom: -1rem !important;
      }
      .mb-sm-n4 {
          margin-bottom: -1.5rem !important;
      }
      .mb-sm-n5 {
          margin-bottom: -3rem !important;
      }

      .ms-sm-n1 {
        margin-left: -0.25rem !important;
      }
      .ms-sm-n2 {
          margin-left: -0.5rem !important;
      }
      .ms-sm-n3 {
          margin-left: -1rem !important;
      }
      .ms-sm-n4 {
          margin-left: -1.5rem !important;
      }
      .ms-sm-n5 {
          margin-left: -3rem !important;
      }
    }

    @media (min-width: 768px) {
      .fw-md-medium {
        font-weight: 500 !important;
      }

      .fw-md-semibold {
        font-weight: 600 !important;
      }

      .display-md-1 {
        font-size: 6rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-md-2 {
        font-size: 5.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-md-3 {
        font-size: 4.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-md-4 {
        font-size: 3.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .h1-md {
        font-size: 2.5rem;
      }

      .h2-md {
        font-size: 2rem;
      }

      .h3-md {
        font-size: 1.75rem;
      }

      .h4-md {
        font-size: 1.5rem;
      }

      .h5-md {
        font-size: 1.25rem;
      }

      .h6-md {
        font-size: 1rem;
      }

      .w-md-25 {
        width: 25% !important;
      }

      .w-md-50 {
        width: 50% !important;
      }

      .w-md-75 {
        width: 75% !important;
      }

      .w-md-100 {
        width: 100% !important;
      }

      .w-md-auto {
        width: auto !important;
      }

      .h-md-25 {
        height: 25% !important;
      }

      .h-md-50 {
        height: 50% !important;
      }

      .h-md-75 {
        height: 75% !important;
      }

      .h-md-100 {
        height: 100% !important;
      }

      .h-md-auto {
        height: auto !important;
      }

      .mw-md-100 {
        max-width: 100% !important;
      }

      .mh-md-100 {
        max-height: 100% !important;
      }

      .min-vw-md-100 {
        min-width: 100vw !important;
      }

      .min-vh-md-100 {
        min-height: 100vh !important;
      }

      .vw-md-100 {
        width: 100vw !important;
      }

      .vh-md-100 {
        height: 100vh !important;
      }

      .small-md {
        font-size: 80%;
        font-weight: 400;
      }

      .normal-md {
        font-size: 100%;
      }

      .big-md {
        font-size: 120%;
      }

      .m-md-n1 {
        margin: -0.25rem !important;
      }
      .m-md-n2 {
        margin: -0.5rem !important;
      }
      .m-md-n3 {
        margin: -1rem !important;
      }
      .m-md-n4 {
        margin: -1.5rem !important;
      }
      .m-md-n5 {
        margin: -3rem !important;
      }

      .mt-md-n1 {
        margin-top: -0.25rem !important;
      }
      .mt-md-n2 {
          margin-top: -0.5rem !important;
      }
      .mt-md-n3 {
          margin-top: -1rem !important;
      }
      .mt-md-n4 {
          margin-top: -1.5rem !important;
      }
      .mt-md-n5 {
          margin-top: -3rem !important;
      }

      .me-md-n1 {
        margin-right: -0.25rem !important;
      }
      .me-md-n2 {
          margin-right: -0.5rem !important;
      }
      .me-md-n3 {
          margin-right: -1rem !important;
      }
      .me-md-n4 {
          margin-right: -1.5rem !important;
      }
      .me-md-n5 {
          margin-right: -3rem !important;
      }

      .mb-md-n1 {
        margin-bottom: -0.25rem !important;
      }
      .mb-md-n2 {
          margin-bottom: -0.5rem !important;
      }
      .mb-md-n3 {
          margin-bottom: -1rem !important;
      }
      .mb-md-n4 {
          margin-bottom: -1.5rem !important;
      }
      .mb-md-n5 {
          margin-bottom: -3rem !important;
      }

      .ms-md-n1 {
        margin-left: -0.25rem !important;
      }
      .ms-md-n2 {
          margin-left: -0.5rem !important;
      }
      .ms-md-n3 {
          margin-left: -1rem !important;
      }
      .ms-md-n4 {
          margin-left: -1.5rem !important;
      }
      .ms-md-n5 {
          margin-left: -3rem !important;
      }
    }

    @media (min-width: 992px) {
      .fw-lg-medium {
        font-weight: 500 !important;
      }

      .fw-lg-semibold {
        font-weight: 600 !important;
      }

      .display-lg-1 {
        font-size: 6rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-lg-2 {
        font-size: 5.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-lg-3 {
        font-size: 4.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-lg-4 {
        font-size: 3.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .h1-lg {
        font-size: 2.5rem;
      }

      .h2-lg {
        font-size: 2rem;
      }

      .h3-lg {
        font-size: 1.75rem;
      }

      .h4-lg {
        font-size: 1.5rem;
      }

      .h5-lg {
        font-size: 1.25rem;
      }

      .h6-lg {
        font-size: 1rem;
      }

      .w-lg-25 {
        width: 25% !important;
      }

      .w-lg-50 {
        width: 50% !important;
      }

      .w-lg-75 {
        width: 75% !important;
      }

      .w-lg-100 {
        width: 100% !important;
      }

      .w-lg-auto {
        width: auto !important;
      }

      .h-lg-25 {
        height: 25% !important;
      }

      .h-lg-50 {
        height: 50% !important;
      }

      .h-lg-75 {
        height: 75% !important;
      }

      .h-lg-100 {
        height: 100% !important;
      }

      .h-lg-auto {
        height: auto !important;
      }

      .mw-lg-100 {
        max-width: 100% !important;
      }

      .mh-lg-100 {
        max-height: 100% !important;
      }

      .min-vw-lg-100 {
        min-width: 100vw !important;
      }

      .min-vh-lg-100 {
        min-height: 100vh !important;
      }

      .vw-lg-100 {
        width: 100vw !important;
      }

      .vh-lg-100 {
        height: 100vh !important;
      }

      .small-lg {
        font-size: 80%;
        font-weight: 400;
      }

      .normal-lg {
        font-size: 100%;
      }

      .big-lg {
        font-size: 120%;
      }

      .m-lg-n1 {
        margin: -0.25rem !important;
      }
      .m-lg-n2 {
        margin: -0.5rem !important;
      }
      .m-lg-n3 {
        margin: -1rem !important;
      }
      .m-lg-n4 {
        margin: -1.5rem !important;
      }
      .m-lg-n5 {
        margin: -3rem !important;
      }

      .mt-lg-n1 {
        margin-top: -0.25rem !important;
      }
      .mt-lg-n2 {
          margin-top: -0.5rem !important;
      }
      .mt-lg-n3 {
          margin-top: -1rem !important;
      }
      .mt-lg-n4 {
          margin-top: -1.5rem !important;
      }
      .mt-lg-n5 {
          margin-top: -3rem !important;
      }

      .me-lg-n1 {
        margin-right: -0.25rem !important;
      }
      .me-lg-n2 {
          margin-right: -0.5rem !important;
      }
      .me-lg-n3 {
          margin-right: -1rem !important;
      }
      .me-lg-n4 {
          margin-right: -1.5rem !important;
      }
      .me-lg-n5 {
          margin-right: -3rem !important;
      }

      .mb-lg-n1 {
        margin-bottom: -0.25rem !important;
      }
      .mb-lg-n2 {
          margin-bottom: -0.5rem !important;
      }
      .mb-lg-n3 {
          margin-bottom: -1rem !important;
      }
      .mb-lg-n4 {
          margin-bottom: -1.5rem !important;
      }
      .mb-lg-n5 {
          margin-bottom: -3rem !important;
      }

      .ms-lg-n1 {
        margin-left: -0.25rem !important;
      }
      .ms-lg-n2 {
          margin-left: -0.5rem !important;
      }
      .ms-lg-n3 {
          margin-left: -1rem !important;
      }
      .ms-lg-n4 {
          margin-left: -1.5rem !important;
      }
      .ms-lg-n5 {
          margin-left: -3rem !important;
      }
    }

    @media (min-width: 1200px) {
      .fw-xl-medium {
        font-weight: 500 !important;
      }

      .fw-xl-semibold {
        font-weight: 600 !important;
      }

      .display-xl-1 {
        font-size: 6rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-xl-2 {
        font-size: 5.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-xl-3 {
        font-size: 4.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-xl-4 {
        font-size: 3.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .h1-xl {
        font-size: 2.5rem;
      }

      .h2-xl {
        font-size: 2rem;
      }

      .h3-xl {
        font-size: 1.75rem;
      }

      .h4-xl {
        font-size: 1.5rem;
      }

      .h5-xl {
        font-size: 1.25rem;
      }

      .h6-xl {
        font-size: 1rem;
      }

      .w-xl-25 {
        width: 25% !important;
      }

      .w-xl-50 {
        width: 50% !important;
      }

      .w-xl-75 {
        width: 75% !important;
      }

      .w-xl-100 {
        width: 100% !important;
      }

      .w-xl-auto {
        width: auto !important;
      }

      .h-xl-25 {
        height: 25% !important;
      }

      .h-xl-50 {
        height: 50% !important;
      }

      .h-xl-75 {
        height: 75% !important;
      }

      .h-xl-100 {
        height: 100% !important;
      }

      .h-xl-auto {
        height: auto !important;
      }

      .mw-xl-100 {
        max-width: 100% !important;
      }

      .mh-xl-100 {
        max-height: 100% !important;
      }

      .min-vw-xl-100 {
        min-width: 100vw !important;
      }

      .min-vh-xl-100 {
        min-height: 100vh !important;
      }

      .vw-xl-100 {
        width: 100vw !important;
      }

      .vh-xl-100 {
        height: 100vh !important;
      }

      .small-xl {
        font-size: 80%;
        font-weight: 400;
      }

      .normal-xl {
        font-size: 100%;
      }

      .big-xl {
        font-size: 120%;
      }

      .m-xl-n1 {
        margin: -0.25rem !important;
      }
      .m-xl-n2 {
        margin: -0.5rem !important;
      }
      .m-xl-n3 {
        margin: -1rem !important;
      }
      .m-xl-n4 {
        margin: -1.5rem !important;
      }
      .m-xl-n5 {
        margin: -3rem !important;
      }

      .mt-xl-n1 {
        margin-top: -0.25rem !important;
      }
      .mt-xl-n2 {
          margin-top: -0.5rem !important;
      }
      .mt-xl-n3 {
          margin-top: -1rem !important;
      }
      .mt-xl-n4 {
          margin-top: -1.5rem !important;
      }
      .mt-xl-n5 {
          margin-top: -3rem !important;
      }

      .me-xl-n1 {
        margin-right: -0.25rem !important;
      }
      .me-xl-n2 {
          margin-right: -0.5rem !important;
      }
      .me-xl-n3 {
          margin-right: -1rem !important;
      }
      .me-xl-n4 {
          margin-right: -1.5rem !important;
      }
      .me-xl-n5 {
          margin-right: -3rem !important;
      }

      .mb-xl-n1 {
        margin-bottom: -0.25rem !important;
      }
      .mb-xl-n2 {
          margin-bottom: -0.5rem !important;
      }
      .mb-xl-n3 {
          margin-bottom: -1rem !important;
      }
      .mb-xl-n4 {
          margin-bottom: -1.5rem !important;
      }
      .mb-xl-n5 {
          margin-bottom: -3rem !important;
      }

      .ms-xl-n1 {
        margin-left: -0.25rem !important;
      }
      .ms-xl-n2 {
          margin-left: -0.5rem !important;
      }
      .ms-xl-n3 {
          margin-left: -1rem !important;
      }
      .ms-xl-n4 {
          margin-left: -1.5rem !important;
      }
      .ms-xl-n5 {
          margin-left: -3rem !important;
      }
    }

    @media (min-width: 1400px) {
      .fw-xxl-medium {
        font-weight: 500 !important;
      }

      .fw-xxl-semibold {
        font-weight: 600 !important;
      }

      .display-xxl-1 {
        font-size: 6rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-xxl-2 {
        font-size: 5.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-xxl-3 {
        font-size: 4.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-xxl-4 {
        font-size: 3.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .h1-xxl {
        font-size: 2.5rem;
      }

      .h2-xxl {
        font-size: 2rem;
      }

      .h3-xxl {
        font-size: 1.75rem;
      }

      .h4-xxl {
        font-size: 1.5rem;
      }

      .h5-xxl {
        font-size: 1.25rem;
      }

      .h6-xxl {
        font-size: 1rem;
      }

      .w-xxl-25 {
        width: 25% !important;
      }

      .w-xxl-50 {
        width: 50% !important;
      }

      .w-xxl-75 {
        width: 75% !important;
      }

      .w-xxl-100 {
        width: 100% !important;
      }

      .w-xxl-auto {
        width: auto !important;
      }

      .h-xxl-25 {
        height: 25% !important;
      }

      .h-xxl-50 {
        height: 50% !important;
      }

      .h-xxl-75 {
        height: 75% !important;
      }

      .h-xxl-100 {
        height: 100% !important;
      }

      .h-xxl-auto {
        height: auto !important;
      }

      .mw-xxl-100 {
        max-width: 100% !important;
      }

      .mh-xxl-100 {
        max-height: 100% !important;
      }

      .min-vw-xxl-100 {
        min-width: 100vw !important;
      }

      .min-vh-xxl-100 {
        min-height: 100vh !important;
      }

      .vw-xxl-100 {
        width: 100vw !important;
      }

      .vh-xxl-100 {
        height: 100vh !important;
      }

      .small-xxl {
        font-size: 80%;
        font-weight: 400;
      }

      .normal-xxl {
        font-size: 100%;
      }

      .big-xxl {
        font-size: 120%;
      }

      .m-xxl-n1 {
        margin: -0.25rem !important;
      }
      .m-xxl-n2 {
        margin: -0.5rem !important;
      }
      .m-xxl-n3 {
        margin: -1rem !important;
      }
      .m-xxl-n4 {
        margin: -1.5rem !important;
      }
      .m-xxl-n5 {
        margin: -3rem !important;
      }

      .mt-xxl-n1 {
        margin-top: -0.25rem !important;
      }
      .mt-xxl-n2 {
          margin-top: -0.5rem !important;
      }
      .mt-xxl-n3 {
          margin-top: -1rem !important;
      }
      .mt-xxl-n4 {
          margin-top: -1.5rem !important;
      }
      .mt-xxl-n5 {
          margin-top: -3rem !important;
      }

      .me-xxl-n1 {
        margin-right: -0.25rem !important;
      }
      .me-xxl-n2 {
          margin-right: -0.5rem !important;
      }
      .me-xxl-n3 {
          margin-right: -1rem !important;
      }
      .me-xxl-n4 {
          margin-right: -1.5rem !important;
      }
      .me-xxl-n5 {
          margin-right: -3rem !important;
      }

      .mb-xxl-n1 {
        margin-bottom: -0.25rem !important;
      }
      .mb-xxl-n2 {
          margin-bottom: -0.5rem !important;
      }
      .mb-xxl-n3 {
          margin-bottom: -1rem !important;
      }
      .mb-xxl-n4 {
          margin-bottom: -1.5rem !important;
      }
      .mb-xxl-n5 {
          margin-bottom: -3rem !important;
      }

      .ms-xxl-n1 {
        margin-left: -0.25rem !important;
      }
      .ms-xxl-n2 {
          margin-left: -0.5rem !important;
      }
      .ms-xxl-n3 {
          margin-left: -1rem !important;
      }
      .ms-xxl-n4 {
          margin-left: -1.5rem !important;
      }
      .ms-xxl-n5 {
          margin-left: -3rem !important;
      }
    }
  }

  @media screen and (-webkit-min-device-pixel-ratio:0) {
  input,
  select,
  textarea {
    font-size: 16px;
  }
}

@media not all and (min-resolution:.001dpcm) {
  @supports (-webkit-appearance:none) {
    input,
    select,
    textarea {
      font-size: 16px!important;
    }
  }
}
`;
