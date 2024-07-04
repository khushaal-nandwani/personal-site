const TPTracker = () => {
    return (
        <div class="text-left">
            <p className="text-2xl font-bold">Toilet Paper Tracker</p>
            <p className="italic">Python, Adruino</p>
            <p>A hardware project made in TartanHacks using Arduino and Python which read live data from the Arduino circuit to detect when the toilet paper would run out.</p>
            <p>Once the toilet paper runs out, an email is sent using smtplib, ssl certified to the custodial staff.</p>
            <p>Won the Best Hardware Hack award for TartanHacks 2021.</p>
        </div>
    );
}

export default TPTracker;