import '../asset/style/reasons.css'

const Reasons = () => {
  return (
    <div className='container reasons-main'>
      <div className='d-flex justify-content-around'>
        <h1 className='reasons-h1'>The most trusted cryptocurrency platform</h1>
      </div>
      <div className='d-flex justify-content-around'>
        <p>Here are a few reasons why you should choose Coinbase</p>
      </div>
      <div className='column-container'>
        <div className='column-1'>
          <svg width='64' height='64' viewBox='0 0 64 64' fill='none'>
            <path d='M56 0H8v50h48V0z' fill='#BFE9FF'></path>
            <path d='M64 10H0v48h64V10z' fill='#56B4FC'></path>
            <path d='M56 10H8v40h48V10z' fill='#1652F0'></path>
            <path d='M10 16H6v8h4v-8zM10 36H6v8h4v-8z' fill='#1652F0'></path>
            <path d='M64 58h-8v6h8v-6zM8 58H0v6h8v-6z' fill='#56B4FC'></path>
            <path
              d='M41.19 20.81c-5.07-5.07-13.32-5.07-18.38 0-5.06 5.07-5.07 13.32 0 18.38 2.53 2.53 5.86 3.8 9.19 3.8 3.33 0 6.66-1.27 9.19-3.8 5.07-5.07 5.07-13.31 0-18.38zM32 19c2.5 0 5 .85 7.04 2.55l-2.85 2.85A6.99 6.99 0 0032 23c-1.53 0-2.98.5-4.19 1.4l-2.85-2.85A11.03 11.03 0 0132 19zm3.54 14.54c-.95.94-2.2 1.46-3.54 1.46-1.34 0-2.59-.52-3.54-1.46A4.952 4.952 0 0127 30c0-1.33.52-2.59 1.46-3.54.94-.95 2.2-1.46 3.54-1.46 1.34 0 2.59.52 3.54 1.46.95.94 1.46 2.21 1.46 3.54s-.52 2.59-1.46 3.54zM23.55 22.96l2.85 2.85A6.99 6.99 0 0025 30c0 1.53.5 2.98 1.4 4.19l-2.85 2.85a11.018 11.018 0 010-14.08zm1.41 15.49l2.85-2.85a6.969 6.969 0 008.38 0l2.85 2.85a11.018 11.018 0 01-14.08 0zm15.49-1.41l-2.85-2.85c.9-1.2 1.4-2.65 1.4-4.19 0-1.53-.5-2.98-1.4-4.19l2.85-2.85a11.018 11.018 0 010 14.08z'
              fill='#fff'
            ></path>
          </svg>
          
          <h4>Secure Storage</h4>
          <p className='paragraph-side'>
            We store the vast majority of the digital assets in secure offline
            storage.
          </p>
          <a href='/' className='link-side'>
            Learn how Coinbase keeps your funds safe and secure{' '}
          </a>
        </div>
        <div className='column-1'>
          <svg width='64' height='64' viewBox='0 0 64 64' fill='none'>
            <path d='M56 56h-8v8h8c4.42 0 8-3.58 8-8h-8z' fill='#BFE9FF'></path>
            <path
              d='M48 56V0H0v56c0 4.42 3.58 8 8 8h48c-4.42 0-8-3.58-8-8z'
              fill='#56B4FC'
            ></path>
            <path
              d='M48 56H0c0 4.42 3.58 8 8 8h48c-4.42 0-8-3.58-8-8z'
              fill='#1652F0'
            ></path>
            <path
              d='M40 30H8v2h32v-2zM40 36H8v2h32v-2zM40 42H8v2h32v-2zM32 48H16v2h16v-2zM23.5 24.66l-3.24-5.92-5.92-3.24 5.92-3.24 3.24-5.92 3.24 5.92 5.92 3.24-5.92 3.24-3.24 5.92zm-4.99-9.16l3.22 1.76 1.76 3.22 1.76-3.22 3.22-1.76-3.22-1.76-1.76-3.22-1.76 3.22-3.22 1.76z'
              fill='#fff'
            ></path>
          </svg>
          <h4>Protected by insurance</h4>
          <p className='paragraph-side'>
            Cryptocurrency stored on our servers is covered by our insurance
            policy.
          </p>
          <a href='/' className='link-side'>
            Learn how your crypto is covered by our insurance policy
          </a>
        </div>
        <div className='column-1'>
          <svg width='56' height='64' viewBox='0 0 56 64' fill='none'>
            <path d='M56 0H24v64h32V0z' fill='#BFE9FF'></path>
            <path
              d='M0 8v28c0 13.25 24 24 24 24s24-10.75 24-24V8H0z'
              fill='#56B4FC'
            ></path>
            <path d='M24 8v52s24-10.75 24-24V8H24z' fill='#1652F0'></path>
            <path
              d='M7 15v21c0 4.92 8.57 11.72 16.53 15.97l.47.25.47-.25C32.43 47.72 41 40.92 41 36V15H7zm32 2v6H9v-6h30zM24 49.95C15.55 45.35 9 39.28 9 36V25h30v11c0 3.28-6.55 9.35-15 13.95z'
              fill='#fff'
            ></path>
          </svg>
          <h4>Industry best practices</h4>
          <p className='paragraph-side'>
            Coinbase supports a variety of the most popular digital currencies.
          </p>
          <a href='/' className='link-side'>
            Learn how we implement industry best practices for account security
          </a>
        </div>
      </div>
    </div>
  )
}

export default Reasons;
