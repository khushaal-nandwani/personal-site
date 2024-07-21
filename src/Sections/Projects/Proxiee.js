const Proxiee = () => {
    return (
        <div>
            <p className="text-2xl font-bold">Proxiee</p>
            <p className="italic">Python, Flask</p>
            <li>Engineered a secure server gateway, Proxiee, enabling company developers to access online
APIs such as ChatGPT and those of online internal products through a locally hosted server connected to an internet-enabled
server.</li>
            <li>Implemented support for all HTTP method types, integrated API access restrictions, and designed an au-
thentication system to ensure secure connections along with an extensive logging system and a log analysis
tool.</li>
<li>Has a config file, to assign users credentials, store Authorization keys and dynamically add headers specific to APIs </li>
        </div>
    );
}

export default Proxiee;
export const tags = ['Python', 'Flask', 'Backend'];