import Heading from "../atoms/heading";
import Section2 from "../atoms/section2";
import RecentPosts from "../molecules/recentpost";

export default function Allposts(){
    return(
        <Section2 isFancy={true}>
            <Heading>Posts</Heading>
            <h1>Raynor Herfian Iqbal Fawwaz</h1>
            <h2>2141720260</h2>
            <RecentPosts/>
        </Section2>
    );
}