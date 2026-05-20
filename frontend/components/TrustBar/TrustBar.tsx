import styles from "./TrustBar.module.css";
import { IconShieldCheck, IconBuildingBank, IconGavel, IconUsers } from "@tabler/icons-react";


export default function TrustBar() {
    return (
        <section className={styles.trustBar}>
            <div className="text-sm md:text-base max-w-6xl mx-auto text-fg-muted px-6 flex flex-col md:flex-row items-center gap-8">
                <h2 className="max-w-xl font-semibold text-center md:text-left uppercase tracking-wide md:text-base">
                    Trusted by <br /> compliance teams
                </h2>
                <ul className="mx-auto flex flex-col md:flex-row items-center gap-4">
                    <li className="flex flex-row justify-evenly items-center">
                        <div className={styles.iconWrapper}><div className={styles.iconInner}><IconShieldCheck size={20} stroke={1.6} className="text-accent" /></div></div>
                        <p className="w-8/12">Housing Ombudsman aligned</p>
                    </li>
                    <li className="flex flex-row justify-evenly items-center">
                        <div className={styles.iconWrapper}><div className={styles.iconInner}><IconBuildingBank size={20} stroke={1.6} className="text-accent" /></div></div>
                        <p className="w-8/12">University proven methodology</p>
                    </li>
                    <li className="flex flex-row justify-evenly items-center">
                        <div className={styles.iconWrapper}><div className={styles.iconInner}><IconGavel size={20} stroke={1.6} className="text-accent" /></div></div>
                        <p className="w-8/12">Court-ready format</p>
                    </li>
                    <li className="flex flex-row justify-evenly items-center">
                        <div className={styles.iconWrapper}><div className={styles.iconInner}><IconUsers size={20} stroke={1.6} className="text-accent" /></div></div>
                        <p className="w-8/12">12 housing providers</p>
                    </li>
                </ul>
            </div>

        </section>
    );
}