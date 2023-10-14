import Articles from "@/lib/components/page/test/Articles";
import HelloWorld from "@/lib/components/page/test/HelloWorld";

export default function Test() {
    return (
        <>
            <HelloWorld />
            <Articles />
            <button className="btn btn-primary">Button</button>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <figure>
                    <img
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                    />
                </figure>
            </div>
        </>
    );
}
