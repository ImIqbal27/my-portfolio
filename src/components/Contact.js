import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className='bg-teal-300 px-10 py-14'>
                <div className='text-center pb-14 text-white'>

                    <h1 className='text-4xl'>Send me a message !</h1>
                </div>

                <div className='grid grid-cols-1 justify-items-center gap-5 '>
                    <input
                        type='text'
                        placeholder='Email Address'
                        className='input w-full max-w-md'
                    />
                    <input
                        type='text'
                        placeholder='Subject'
                        className='input w-full max-w-md'
                    />
                    <textarea
                        className='textarea w-full max-w-md'
                        placeholder='Your message'
                        rows={6}
                    ></textarea>
                    <button type="submit" className="btn btn-accent-900 w-96">Send</button>
                </div>




            </div>
        </div>
    );
};

export default Contact;