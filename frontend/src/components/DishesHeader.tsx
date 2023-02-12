

function DishesHeader() {

    return (
        <div className='mt-32'>
            <div>
                <h2 className='capitalize text-headingColor font-bold text-2xl'>Our Hot Dishes</h2>
                <p className='w-32 h-1 rounded-xl bg-orange-500'></p>
            </div>

            <div className='w-full relative mt-10 overflow-y-hidden overflow-x-auto'>
                <div className='flex justify-center items-center gap-14'>
                    <div className='bg-cartNumBg w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg'>
                        <div className='w-10 h-10 rounded-full shadow-lg bg-white group-hover:bg-white flex items-center justify-center'>
                            
                        </div>
                        <p className='text-sm text-white group-hover:text-white'>Chicken</p>
                    </div>

                    <div className='bg-card w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg'>
                        <div className='w-10 h-10 rounded-full shadow-lg bg-cartNumBg group-hover:bg-white flex items-center justify-center'>
                            
                        </div>
                        <p className='text-sm text-textColor group-hover:text-white'>Curry</p>
                    </div>

                    <div className='bg-card w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg'>
                        <div className='w-10 h-10 rounded-full shadow-lg bg-cartNumBg group-hover:bg-white flex items-center justify-center'>
                            
                        </div>
                        <p className='text-sm text-textColor group-hover:text-white'>Rice</p>
                    </div>

                    <div className='bg-card w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg'>
                        <div className='w-10 h-10 rounded-full shadow-lg bg-cartNumBg group-hover:bg-white flex items-center justify-center'>
                            
                        </div>
                        <p className='text-sm text-textColor group-hover:text-white'>Fish</p>
                    </div>

                    <div className='bg-card w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg'>
                        <div className='w-10 h-10 rounded-full shadow-lg bg-cartNumBg group-hover:bg-white flex items-center justify-center'>
                            
                        </div>
                        <p className='text-sm text-textColor group-hover:text-white'>Fruits</p>
                    </div>

                    <div className='bg-card w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg'>
                        <div className='w-10 h-10 rounded-full shadow-lg bg-cartNumBg group-hover:bg-white flex items-center justify-center'>
                            
                        </div>
                        <p className='text-sm text-textColor group-hover:text-white'>Ice creams</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DishesHeader;