import React, {useEffect} from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";


export function Skills() {
    const { ref, inView } = useInView({ threshold: 0.3 });
    const animation = useAnimation();
    
useEffect(() => {
    if (inView) {
        animation.start({
            opacity: 1,
            transition: {
                // delay: 0.1,
                duration: 0.5,
            },
        });
    }
    if (!inView) {
        animation.start({
            opacity: 0,
        });
    }
}, [inView]);


    return (
        <motion.div id="skills" ref={ref} animate={animation}>
            {/* <div className="placeHolder"> */}
            <div>
                <h1>Skills</h1>{" "}
                <img
                    className="stackLogo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                    alt="HTML5 Logo"
                />
                <img
                    className="stackLogo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                    alt="CSS3 Logo"
                />
                <img
                    className="stackLogo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                    alt="JavaScript Logo"
                />
                <img
                    className="stackLogo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React.js Logo"
                />
                <img
                    className="stackLogo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                    alt="Redux Logo"
                />
                <img
                    className="stackLogo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
                    alt="Socket.io Logo"
                />
                <img
                    className="stackLogo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain.svg"
                    alt="jQuery Logo"
                />
                <img
                    className="stackLogo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
                    alt="PostgreSQL Logo"
                />
                <img
                    className="stackLogo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt="Express Logo"
                />
                <img
                    className="stackLogo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg"
                    alt="Express-Handlebars Logo"
                />
                <img
                    className="stackLogo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain.svg"
                    alt="Vue.js Logo"
                />
                <img
                    className="stackLogo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
                    alt="TypeScript Logo"
                />
                <img
                    className="stackLogo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                    alt="AWS Logo"
                />
            </div>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem veritatis dignissimos maiores in eaque eius iusto
                mollitia explicabo asperiores incidunt, quam, voluptas earum
                libero adipisci accusantium ratione necessitatibus sequi tempore
                officia, repellat possimus aliquam? Id consectetur ipsum
                veritatis alias rem officiis voluptatem dignissimos, quae
                molestiae, exercitationem placeat quisquam aperiam quidem nulla!
                Veniam cumque ipsa voluptate recusandae accusantium error natus!
                Quo temporibus eum rerum quam sunt debitis hic dolore
                consequuntur repellendus delectus distinctio velit dolores
                accusantium eius dignissimos doloribus mollitia, repudiandae
                inventore unde in ipsam quibusdam? Eveniet doloremque fugiat
                provident quia perspiciatis nulla impedit animi est similique,
                dignissimos inventore sequi ipsam esse nemo consectetur ab,
                labore molestias minima rerum aliquam eligendi sapiente nostrum
                veniam dolorum? Amet odit nobis alias omnis fugiat eligendi.
                Maiores ut beatae officia animi veniam possimus voluptas esse
                quod repellendus eos error necessitatibus eaque, voluptatum
                consequatur perspiciatis ratione. Distinctio pariatur, unde,
                facere laborum fugit ipsam, ipsa aliquid voluptatibus commodi
                voluptas minima quisquam quo. Earum sapiente blanditiis impedit
                facilis eaque, fuga atque magnam, accusantium perspiciatis ipsum
                veritatis autem non. Deserunt ex numquam facilis maiores
                praesentium sunt laborum iste. Esse animi iusto necessitatibus
                reprehenderit repudiandae quidem facere, cum repellendus
                reiciendis cupiditate asperiores. Cum, dignissimos error magni
                odio totam minima corporis voluptatem et repudiandae, nesciunt
                deserunt laudantium quasi inventore distinctio reprehenderit hic
                consectetur commodi rerum possimus. Fugit voluptas saepe
                aliquid. Non quia excepturi dolores voluptas rem mollitia nisi
                eum maiores quae aliquam, alias quos ipsa illum aliquid. Dolor,
                excepturi dicta? Tenetur dolorem expedita voluptatibus odio,
                labore quaerat deleniti ut voluptas natus aspernatur dolores
                animi officia. Sed, repellendus facilis fugit, officiis
                consequuntur non obcaecati recusandae quasi reprehenderit quas
                tempore. Sit, modi? Pariatur neque distinctio quas impedit
                suscipit placeat dicta quaerat sit perspiciatis ratione natus
                necessitatibus eum omnis hic, consectetur repudiandae facilis
                labore magnam accusamus odio laboriosam modi blanditiis quasi
                quam. Alias numquam quos deleniti sunt? Architecto nam
                consequatur veritatis non accusantium voluptatibus animi qui,
                aperiam eum odit, labore minima optio id reprehenderit
                consectetur odio sapiente. Aliquam blanditiis, quo soluta
                debitis qui doloremque illo ipsam nisi. Nostrum iusto, quia,
                illo mollitia veritatis dolorem reiciendis sequi placeat esse
                eum non itaque ea saepe quasi fugit vel molestias iure labore,
                aliquid inventore debitis! Fugit fugiat aut nulla vitae
                aspernatur dolores consequuntur, tempora earum quae expedita
                itaque facere nihil obcaecati iusto doloremque perferendis
                voluptates esse repellendus molestiae aperiam dolor maiores.
                Ipsum obcaecati omnis, reprehenderit, nihil libero laboriosam in
                animi perspiciatis rerum mollitia delectus repellendus fugiat
                dolore, temporibus natus beatae repudiandae! Beatae, officia,
                corrupti natus nisi a corporis voluptatibus sapiente earum harum
                quibusdam magnam, molestiae nobis atque? Dolorum tempore
                voluptatum eveniet aut sed quas aliquam reiciendis recusandae
                illum mollitia. Odit illum nihil quis necessitatibus expedita a
                minus dolores maiores vitae atque eligendi, recusandae mollitia
                molestias? Autem, tempora perspiciatis soluta esse hic officiis
                quas voluptates sapiente magnam itaque. Placeat iusto ducimus
                quidem facilis possimus natus repudiandae rerum inventore
                provident dolores optio ullam, eum vero? Ut ex aspernatur dicta
                veritatis architecto, nostrum placeat facere dolore sapiente, a
                saepe animi debitis adipisci beatae illum nemo! Necessitatibus
                est quos maxime, neque quod in accusamus atque quae, tempora
                repudiandae id reprehenderit assumenda optio deleniti
                perspiciatis. Quaerat voluptates sint eos laboriosam doloribus
                iure ad totam culpa. Nostrum beatae modi nisi qui vitae, error
                eum dicta doloremque. Molestias quod, ea similique quidem,
                officia impedit quisquam deleniti iure nihil beatae facilis
                atque tenetur nesciunt quo illo eius maiores. Unde placeat
                incidunt, architecto inventore perferendis eum tenetur iure
                consequatur numquam optio possimus modi sequi velit provident
                aperiam ducimus harum. Architecto ratione nostrum, quae pariatur
                eum rem voluptatem beatae voluptas harum. Corrupti, maiores.
                Quos enim dolore obcaecati eveniet omnis, pariatur distinctio
                aliquid at doloribus veniam nisi possimus id fugit voluptate
                excepturi, harum consequatur consectetur fuga. Ducimus
                architecto odio, velit sapiente ipsum ratione, sed omnis
                necessitatibus nam nostrum quis recusandae nulla inventore enim
                vitae consequuntur consectetur error est? Reiciendis aliquam
                repellendus, culpa minima temporibus sint impedit possimus?
                Facilis, optio quo repellendus quos ea accusamus laudantium iste
                voluptate non suscipit dignissimos modi ipsa animi excepturi
                ipsum debitis! Consequatur non doloribus blanditiis a nemo
                aspernatur facere maiores reprehenderit porro, ipsa distinctio
                pariatur, dolores esse, maxime totam! Autem adipisci numquam
                nihil qui corporis doloribus quasi omnis mollitia rerum
                voluptatibus. Officiis iusto natus, est quam inventore nemo
                aspernatur esse corporis repellat, quas eius quisquam enim, ea
                molestiae. Vitae quae expedita quam nemo, provident dicta
                repellat odit accusamus repellendus deleniti accusantium
                maiores, minus tempora ipsa laboriosam adipisci? Incidunt, quis?
                Deleniti corporis provident numquam error similique voluptate
                autem consectetur labore quia distinctio quos neque dignissimos,
                nihil maxime sint eius amet hic fugit ab exercitationem
                reprehenderit! Dolores, atque perferendis libero tempora iure
                consequuntur laboriosam ipsum cum reprehenderit ullam, impedit
                culpa temporibus provident earum doloremque quisquam architecto
                totam voluptatibus? Omnis temporibus, perferendis eum vero ab ea
                quia debitis. Enim iusto reiciendis temporibus voluptatum
                cumque! Iure, dicta! Provident reprehenderit illo laboriosam
                incidunt quod eos ut impedit dolores dolorum et nisi, animi
                aliquam ducimus! Sed eligendi quos quia earum, distinctio
                impedit sunt. Fugiat numquam ratione, beatae quisquam nihil
                asperiores aspernatur eveniet impedit sunt modi molestiae
                doloribus explicabo qui aliquid labore nemo aliquam amet quidem
                suscipit. In ipsum, commodi suscipit obcaecati itaque excepturi,
                nobis alias, tempora ipsam aut doloremque quam mollitia quos
                reiciendis porro impedit harum. Animi voluptates delectus ipsa
                quo aspernatur quaerat saepe! Explicabo cum quam earum modi!
                Non, minima corrupti? Soluta perferendis pariatur qui rerum ad
                sequi quam, maxime, sunt natus ab aliquid, sed aliquam nesciunt
                nisi! Dolor, quis pariatur. Cupiditate neque quidem tenetur
                perferendis ratione, nihil eos minima, nisi, non tempora
                quibusdam eius obcaecati ipsa suscipit impedit dolore? Libero
                corrupti optio quos praesentium, temporibus porro debitis
                tenetur fugit eligendi nemo modi placeat, rerum voluptatibus eum
                dolore. Qui corrupti debitis aliquam consequuntur sit error unde
                molestiae incidunt harum tenetur, odit iusto id possimus vel
                deserunt soluta veritatis reprehenderit voluptas laboriosam!
                Temporibus est, a explicabo accusantium illo fuga, distinctio
                ducimus harum, accusamus quae quibusdam. Hic, obcaecati.
                Incidunt quaerat veritatis possimus quae odit accusantium amet
                temporibus et adipisci, asperiores harum tempora eligendi
                voluptates laudantium at. Non voluptatibus laudantium quae
                recusandae iure nobis, rem dolorem, sequi sunt repellat vero
                debitis?
            </p>
        </motion.div>
    );
}
