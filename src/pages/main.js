import Button from '@/components/Button'
import AppLayout from '@/components/Layouts/AppLayout'
import Contact from '@/components/Modals/Contact';
import { useState } from "react"

const Main = () => {
    const [isActive, setActive] = useState(false)
    const [slideOut, setSlideOut] = useState(false)

    const handleToggle = () => {
        if (isActive) {
            setSlideOut(true)
            
            setTimeout(() => {
                setActive(false)
                setSlideOut(false)
            }, 750);
        } else {
            setActive(!isActive)
        }
    }

    return (
        <AppLayout
            header = {
                <div>
                    <h2 className="font-semibold text-m text-gray-800 leading-tight">
                        Hi, my name is Łukasz fujarski
                    </h2>
                    <h3 className="font-semibold text-xl text-gray-800 leading-tight mt-4">
                        I’m a full stack developer, <br />specialized in development of web applications<br /> using React, Next.js, Node.js & more
                    </h3>
                    <Button onClick={handleToggle} className="mt-5" type="button">Want to collab?</Button>
                </div>
            }>

            <Contact stateChanger={handleToggle} slideOut={slideOut} isActive={isActive} className="bg-white"></Contact>

            <div className="py-12 bg-white mt-20">
                <div className="container max-w-xl mx-auto">
                    <div className="p-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rerum aliquid id illum accusantium accusamus necessitatibus quam omnis magni mollitia perspiciatis dolorem, modi veniam ullam. Totam nesciunt mollitia dicta vero unde molestias, nobis, excepturi placeat corrupti ipsum perspiciatis! Iste corrupti alias ipsam earum debitis, cumque magni, laborum, fuga velit dignissimos officiis culpa deleniti? Facilis tempore qui possimus, cupiditate inventore, omnis quo officia recusandae molestias asperiores iste, adipisci cumque eos voluptatum consectetur maiores tempora? Mollitia distinctio quia quod ea accusantium ipsum provident saepe perferendis inventore, natus delectus atque soluta, eaque voluptates laboriosam deleniti eum unde quasi maiores veniam eius? Deleniti quas laboriosam cumque? Necessitatibus quam perspiciatis magni impedit voluptates harum nesciunt, recusandae eveniet aliquid placeat molestiae eligendi culpa modi a eum? Cupiditate recusandae perferendis repellendus corporis autem repudiandae at quidem ducimus vitae, facere distinctio. Possimus corrupti dolorum hic fuga eos itaque fugit similique, officia, quas, perspiciatis earum commodi rem tempore. Tempore voluptas error, sit explicabo atque, modi ex repudiandae soluta non fuga laudantium vero deleniti ea quo praesentium? Ipsa blanditiis nostrum consequuntur laborum deserunt dolor dolore, tempora numquam illo ex repellendus suscipit sequi officiis non quod 
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Main