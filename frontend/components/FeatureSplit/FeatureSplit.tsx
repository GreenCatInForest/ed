import styles from "./FeatureSplit.module.css";
import Pill from "../Pill/Pill";
import { HouseDiagram } from "@/components/HouseDiagram";

export default function FeatureSplit() {
    return (
        <section className={styles.featureSplit}>
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center">
                <article className="flex flex-col gap-4">
                    <Pill text="Live diagnostics" type="info" className="w-1/3 uppercase"/>
                    <h2 className="text-3xl md:text-4xl font-bold">Every home, every status, in one view.</h2>
                    <p className="text-fg-muted w-8/12">
                        See compliance state for every unit across your portfolio after uploading the data. Drill into any flat to view active cases, milestone deadlines, and full audit history.
                    </p>
                    <a
                        href="/order"
                        className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white text-center px-6 py-3 rounded-lg font-medium transition-colors w-1/2"
                    >
                        Order your compliance kit
                    </a>
                </article>
                <div className={styles.imageWrapper}>
                    <HouseDiagram />
                </div>
            </div>
        </section>
    );
}   