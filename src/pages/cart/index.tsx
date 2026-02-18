export function CartPage() {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>
            <section className="flex items-center justify-between border-b-2 border-gray-300">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMka8bf5J63Lmy3pWuAIKfjn4zPYSc3cj8g&s"
                    alt="Foto do produto"
                    className="w-28"
                />
                <strong>
                    R$ 10.000
                </strong>
                <div className="flex items-center justify-center gap-3">
                    <button className="bg-slate-600 rounded px-2 text-white font-medium flex items-center justify-center">
                        -
                    </button>
                    2
                    <button className="bg-slate-600 rounded px-2 text-white font-medium flex items-center justify-center">
                        +
                    </button>
                </div>
                <strong className="float-right">
                    Subtotal
                </strong>
            </section>
            <p className="font-bold mt-4">Total: R$ 20.000</p>
        </div>
    );
}