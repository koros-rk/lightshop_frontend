import React from "react";

class HomePage extends React.Component {
    render() {
        return (
            <div className={'h-screen'}>

                <section className={'flex flex-col'}>

                    <div className={'relative ml-80 mt-12 grow'}>
                        <div>
                            <img src="/main_photo_1.png" alt="" className={'absolute'}/>
                        </div>
                        <div>
                            <img src="/mai_photo_2.png" alt="" className={'absolute mt-80 ml-96'}/>
                        </div>

                        <h1 className={'absolute font-melodrama text-8xl font-semibold text-white ml-80 mt-56'}>Studio <br/> <span className={'ml-24'}>Kuhon</span></h1>
                    </div>

                    <div className={'place-self-end flex flex-col justify-end h-screen pb-80 gap-20'}>
                        <p className={'text-2xl font-normal italic text-font-deepblue font-bitter pb-[10px] pr-32 border-b-4 border-site-brown border-opacity-10 '}>Створюємо ваш <br/> індивідуальний простір</p>
                        <button className={'bg-site-brown text-start py-5 pl-5'}><span className={'text-btn-white text-lg font-medium'}>Дізнатися більше</span></button>
                    </div>

                </section>

                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>

            </div>
        );
    }
}

export default HomePage