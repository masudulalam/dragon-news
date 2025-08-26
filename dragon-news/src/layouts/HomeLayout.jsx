import LeftAside from "../components/component-layout/LeftAside";
import RightAside from "../components/component-layout/RightAside";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className='w-11/12 mx-auto py-8'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto mt-7 grid md:grid-cols-12'>
                <aside className="col-span-3">
                    <LeftAside></LeftAside>
                </aside>
                <section className="col-span-6">
                    
                </section>
                <aside className="col-span-3">
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;