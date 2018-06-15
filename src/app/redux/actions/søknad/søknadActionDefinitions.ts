import { Skjemadata } from '../../../types/søknad/Søknad';
import { BarnPartial } from '../../../types/søknad/Barn';
import { AnnenForelderPartial } from '../../../types/søknad/AnnenForelder';
import { UtenlandsoppholdPartial } from '../../../types/søknad/Utenlandsopphold';
import { SøkerPartial } from '../../../types/s\u00F8knad/S\u00F8ker';
import { Attachment } from 'common/storage/attachment/types/Attachment';

export enum SøknadActionKeys {
    'UPDATE_ANNEN_FORELDER' = 'updateAnnenForelder',
    'UPDATE_BARN' = 'updateBarn',
    'UPLOAD_ATTACHMENT' = 'uploadAttachment',
    'UPLOAD_ATTACHMENT_SUCCESS' = 'uploadAttachmentSuccess',
    'UPLOAD_ATTACHMENT_FAILED' = 'uploadAttachmentFailed',
    'UPDATE_UTENLANDSOPPHOLD' = 'updateUtenlandsopphold',
    'UPDATE_SØKER' = 'updateSøker',
    'UPDATE_SØKNAD' = 'updateSøknad'
}

export interface UpdateBarn {
    type: SøknadActionKeys.UPDATE_BARN;
    payload: BarnPartial;
}

export interface UpdateAnnenForelder {
    type: SøknadActionKeys.UPDATE_ANNEN_FORELDER;
    payload: AnnenForelderPartial;
}

export interface UpdateUtenlandsopphold {
    type: SøknadActionKeys.UPDATE_UTENLANDSOPPHOLD;
    payload: UtenlandsoppholdPartial;
}

export interface UpdateSøker {
    type: SøknadActionKeys.UPDATE_SØKER;
    payload: SøkerPartial;
}

export interface UpdateSøknad {
    type: SøknadActionKeys.UPDATE_SØKNAD;
    payload: Skjemadata;
}

export interface UploadAttachment {
    type: SøknadActionKeys.UPLOAD_ATTACHMENT;
    payload: Attachment;
}

export interface UploadAttachmentSuccess {
    type: SøknadActionKeys.UPLOAD_ATTACHMENT_SUCCESS;
    attachment: Attachment;
    url: string;
}

export interface UploadAttachmentFailed {
    type: SøknadActionKeys.UPLOAD_ATTACHMENT_FAILED;
    attachment: Attachment;
    error: string;
}

export type SøknadAction =
    | UpdateBarn
    | UpdateAnnenForelder
    | UpdateUtenlandsopphold
    | UpdateSøker
    | UpdateSøknad
    | UploadAttachment
    | UploadAttachmentSuccess
    | UploadAttachmentFailed;
