import styles from "./RiskStats.module.css";

export default function RiskStats() {
    return (
        <section className={styles.riskStats}>
            <div>The clock starts the moment a tenant complains</div>
            <div>10 working days. That&#39;s all landlords have.</div>
            <p>Awaab&#39;s Law gives every social landlord a hard deadline to investigate damp and mould complaints. No evidence means losing by default.</p>
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className={styles.statCard}>
                    <h3 className="text-3xl font-bold text-center">10</h3>
                    <p className="text-sm text-fg-muted text-center">working days to investigate</p>
                </div>
                <div className={styles.statCard}>
                    <h3 className="text-3xl font-bold text-center">3</h3>
                    <p className="text-sm text-fg-muted text-center">days for written findings</p>
                </div>
                <div className={styles.statCard}>
                    <h3 className="text-3xl font-bold text-center">£25k+</h3>
                    <p className="text-sm text-fg-muted text-center">Ombudsman ruling exposure</p>
                </div>
            </div>
        </section>
    );
}