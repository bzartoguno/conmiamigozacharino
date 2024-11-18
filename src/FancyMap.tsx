import SandboxPaths from './SandboxPaths.png';

export function FancyMap({ setNavigatedTo }: { setNavigatedTo: (path: string) => void }) {
    return (
        <div className='fancymap'>
            <img src={SandboxPaths} useMap="#image-map" alt="Fancy Map" />
            <map name="image-map">
                <area
                    target="_self"
                    alt="Goblin Market"
                    title="Goblin Market"
                    onClick={() => setNavigatedTo("goblins")}
                    coords="1281,1350,1469,1226"
                    shape="rect"
                />
                <area
                    target="_self"
                    alt="Goblin Market"
                    title="Goblin Market"
                    onClick={() => setNavigatedTo("goblins")}
                    coords="1667,838,1511,679"
                    shape="rect"
                />
                <area
                    target="_self"
                    alt="Goblin Market"
                    title="Goblin Market"
                    onClick={() => setNavigatedTo("goblins")}
                    coords="1306,239,1485,409"
                    shape="rect"
                />
                <area
                    target="_self"
                    alt="Auction House"
                    title="Auction House"
                    onClick={() => setNavigatedTo("Auction")}
                    coords="347,691,600,558"
                    shape="rect"
                />
                <area
                    target="_self"
                    alt="Auction House"
                    title="Auction House"
                    onClick={() => setNavigatedTo("Auction")}
                    coords="280,351,61,121"
                    shape="rect"
                />
                <area
                    target="_self"
                    alt="Auction House"
                    title="Auction House"
                    onClick={() => setNavigatedTo("Auction")}
                    coords="1126,701,941,547"
                    shape="rect"
                />
                <area
                    target="_self"
                    alt="Black Market"
                    title="Black Market"
                    onClick={() => setNavigatedTo("Black")}
                    coords="1860,433,1734,315"
                    shape="rect"
                />
                <area
                    target="_self"
                    alt="Black Market"
                    title="Black Market"
                    onClick={() => setNavigatedTo("Black")}
                    coords="167,1247,364,1115"
                    shape="rect"
                />
                <area
                    target="_self"
                    alt="Black Market"
                    title="Black Market"
                    onClick={() => setNavigatedTo("Black")}
                    coords="1093,149,884,28"
                    shape="rect"
                />
            </map>
        </div>
    );
}
