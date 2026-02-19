export default function Home() {
    return (
        <div style={{ padding: 20 }}>
            {/* HERO SECTION */}
            <div style={{ border: "1px solid gray", padding: 20, marginBottom: 20 }}>
                HERO SECTION
            </div>

            {/* FILTERS / SIDEBAR */}
            <div style={{ border: "1px solid gray", padding: 20, marginBottom: 20 }}>
                FILTERS PLACEHOLDER
            </div>

            {/* GAME LIST */}
            <div style={{ display: "grid", gap: 16 }}>
                {/* GAME CARD */}
                <div style={{ border: "1px solid gray", padding: 16 }}>
                    <div>IMAGE</div>
                    <div>TITLE</div>
                    <div>PRICE</div>
                    <div>BUTTONS</div>
                </div>

                <div style={{ border: "1px solid gray", padding: 16 }}>
                    <div>IMAGE</div>
                    <div>TITLE</div>
                    <div>PRICE</div>
                    <div>BUTTONS</div>
                </div>

                <div style={{ border: "1px solid gray", padding: 16 }}>
                    <div>IMAGE</div>
                    <div>TITLE</div>
                    <div>PRICE</div>
                    <div>BUTTONS</div>
                </div>
            </div>
        </div>
    );
}
