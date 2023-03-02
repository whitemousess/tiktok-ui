import Header from '~/components/Layouts/components/Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <h2>HeaderOnly</h2>
        </div>
    );
}

export default DefaultLayout;
