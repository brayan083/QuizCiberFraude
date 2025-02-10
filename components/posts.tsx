import Image from 'next/image'

export default function Posts() {
    return (
        <div>
            <hr className="my-8 border-gray-200" />

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">

                <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow text-left">
                    <div className="aspect-w-16 aspect-h-9">
                        <Image
                            src="/images/post1.jpg"
                            alt="Descripción de la imagen"
                            layout="responsive"
                            width={16}
                            height={9}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-6">
                        <div className="text-xs text-gray-600 mb-2">Seguridad Online</div>
                        <h2 className="text-base font-bold mb-3">Ciberocupación: ¿una amenaza para tu marca?</h2>
                        <p className="text-sm text-gray-700 mb-4">El cybersquatting puede afectar la reputación de tu negocio. ¿Cómo identificarlo y proteger tu dominio antes de que sea tarde?.</p>
                        <a href="https://www.sumate.eu/blog/que-es-ciberocupacion-cybersquatting-como-evitarlo/" target="_blank" className="text-blue-600 font-semibold uppercase text-xs hover:text-blue-800">Leer más</a>
                    </div>
                </article>

                <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow text-left">
                    <div className="aspect-w-16 aspect-h-9">
                        <Image
                            src="/images/post2.jpg"
                            alt="Descripción de la imagen"
                            layout="responsive"
                            width={16}
                            height={9}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-6">
                        <div className="text-xs text-gray-600 mb-2">Protección Empresarial</div>
                        <h2 className="text-base font-bold mb-3">Suplantación de marca: el alto costo del fraude online</h2>
                        <p className="text-sm text-gray-700 mb-4">Las empresas pierden millones por ciberfraude. ¿Cómo impacta esto en la confianza de los clientes y qué hacer para evitarlo?.</p>
                        <a href="https://www.sumate.eu/blog/suplantacion-marca-cuanto-pierden-empresas/" target="_blank" className="text-blue-600 font-semibold uppercase text-xs hover:text-blue-800">Leer más</a>
                    </div>
                </article>

                <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow text-left">
                    <div className="aspect-w-16 aspect-h-9">
                        <Image
                            src="/images/post3.jpg"
                            alt="Descripción de la imagen"
                            layout="responsive"
                            width={16}
                            height={9}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-6">
                        <div className="text-xs text-gray-600 mb-2">E-commerce y Reputación</div>
                        <h2 className="text-base font-bold mb-3">Tiendas falsas: el peligro oculto del comercio digital</h2>
                        <p className="text-sm text-gray-700 mb-4">Las webs fraudulentas engañan a los clientes y dañan la reputación de marcas legítimas. ¿Cómo detectarlas y evitar ser víctima?.</p>
                        <a href="https://www.sumate.eu/blog/como-afectan-tiendas-falsas-a-reputacion-online/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold uppercase text-xs hover:text-blue-800">Leer más</a>
                    </div>
                </article>

            </section>
        </div>
    )
}