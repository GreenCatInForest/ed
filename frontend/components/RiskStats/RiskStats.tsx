import styles from "./RiskStats.module.css";

export default function RiskStats() {
    return (
        <section className={styles.riskStats}>
            <p className="eyebrow">The clock starts the moment a tenant complains</p>
            <h1 className="text-3xl md:text-4xl text-center md:text-left font-bold">10 working days. That&#39;s all landlord have.</h1>
            <p className="text-fg-muted w-8/12 text-center">Awaab&#39;s Law gives every social landlord a hard deadline to investigate damp and mould complaints. No data means losing in front of the Housing Ombudsman — by default.</p>
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className={styles.statCard}>
                    <h3 className="text-3xl font-bold text-center text-accent">10</h3>
                    <p className="text-sm text-fg-muted text-center">working days to investigate</p>
                </div>
                <div className={styles.statCard}>
                    <h3 className="text-3xl font-bold text-center text-accent">3</h3>
                    <p className="text-sm text-fg-muted text-center">days for written findings</p>
                </div>
                <div className={styles.statCard}>
                    <h3 className="text-3xl font-bold text-center text-accent">£25k+</h3>
                    <p className="text-sm text-fg-muted text-center">Ombudsman ruling exposure</p>
                </div>
            </div>
        </section>
    );
}