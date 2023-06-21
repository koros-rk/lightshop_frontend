import React from "react";

class Navbar extends React.Component {

    render() {
        return (

            <header className={"flex justify-between px-28 py-8 border-b-4 border-site-brown"}>

                <img src="/logo.svg" alt="Studia Kuhon"/>

                <nav className={"flex justify-between gap-16"}>
                    <div className={'flex gap-6 font-normal text-lg text-nav-deepblue'}>
                        <button className={'transition-all hover:underline underline-offset-4 decoration-activation-yellow decoration-2'}>Увійти</button>
                        <button className={'transition-all hover:underline underline-offset-4 decoration-activation-yellow decoration-2'}>Реєстрація</button>
                    </div>
                    <button>
                        {/*<img src="/menu.png" alt="menu"/>*/}
                        <svg className={'w-12 transition-colors hover:fill-activation-yellow ease-in-out'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg>

                    </button>
                </nav>
            </header>

        );
    }
}

export default Navbar