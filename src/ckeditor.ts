/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Bold } from '@ckeditor/ckeditor5-basic-styles';
import { Comments } from '@ckeditor/ckeditor5-comments';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {
	public static override builtinPlugins = [
		Alignment,
		Bold,
		Comments,
		Essentials,
		Paragraph
	];

	public static override defaultConfig: EditorConfig = {
		toolbar: {
			items: [
				'bold',
				'|',
				'undo',
				'redo',
				'alignment',
				'comment',
				'commentsArchive'
			]
		},
		language: 'en',
		comments: {
			editorConfig: {
				extraPlugins: [
					Bold
				]
			}
		}
	};
}

export default Editor;
