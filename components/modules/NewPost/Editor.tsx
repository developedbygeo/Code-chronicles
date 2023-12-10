import EditorOptions from '@/modules/NewPost/EditorOptions';
import { Button } from '@/ui/Button';
import { Input } from '@/ui/Input';

const Editor = () => {
    return (
        <div>
            <Input type="text" placeholder="Title" />
            <EditorOptions />
            <div className="editor">
                <Button size="lg">Save</Button>
            </div>
        </div>
    );
};

export default Editor;
