import Editor from '@/modules/NewPost/Editor';
import HeroTitle from '@/modules/UI/HeroTitle';

const CreateNewPost = () => {
    return (
        <section className="apply-pt">
            <HeroTitle>
                <div className="mb-3">How about we write a new post?</div>
            </HeroTitle>
            <Editor />
        </section>
    );
};

export default CreateNewPost;
