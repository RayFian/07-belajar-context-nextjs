import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import Allposts from "../organisms/allpost";

export default function ProfilePage(){
    return(
        <Section2 isFancy={true}>
            <Heading>Profil</Heading>
            <Post
                title="Hello traveller!"
                body="Baca tentang petualangan Saya."
            />
            <Allposts/>
        </Section2>
    );
}