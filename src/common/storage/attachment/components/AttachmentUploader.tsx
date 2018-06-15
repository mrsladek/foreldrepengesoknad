import * as React from 'react';
import { Attachment } from 'common/storage/attachment/types/Attachment';
import AttachmentOverview from 'common/storage/attachment/components/AttachmentOverview';
import { AttachmentType } from '../../../../app/types/søknad/Søknad';
import AttachmentApi from 'common/storage/api/attachmentApi';

export interface AttachmentsUploaderProps {
    attachments: Attachment[];
    attachmentType: AttachmentType;
    onFileUploadStart: (attachment: Attachment) => void;
    onFileUploadFinish: (attachment: Attachment) => void;
}

export default class AttachmentsUploader extends React.Component<
    AttachmentsUploaderProps
> {
    constructor(props: AttachmentsUploaderProps) {
        super(props);
        this.onFileDelete = this.onFileDelete.bind(this);
        this.onFilesSelect = this.onFilesSelect.bind(this);
    }

    onFilesSelect(files: Attachment[]) {
        const { onFileUploadStart, onFileUploadFinish } = this.props;
        files.map((file: Attachment) => {
            file.pending = true;
            onFileUploadStart(file);
            return AttachmentApi.saveAttachment(file).then((response: any) => {
                file.pending = false;
                file.uploaded = true;
                file.url = response.headers.location;
                onFileUploadFinish(file);
            });
        });
    }

    onFileDelete(file: Attachment) {}

    render() {
        const { attachments, attachmentType } = this.props;
        return (
            <AttachmentOverview
                attachments={attachments}
                attachmentType={attachmentType}
                onFilesSelect={this.onFilesSelect}
                onFileDelete={this.onFileDelete}
            />
        );
    }
}
