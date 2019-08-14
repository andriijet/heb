<div id="hi-def-tpl" class="hide">{"tplId":"","assigned":{},"edit_mode":false,"transition_speed":"400","wrapper":{"overflow":"hidden","background":"rgba(255, 255, 255, 0)"},"image":{"enable":true,"slide":0,"scale":false,"push":false,"scale_percents":{"start":"100","stop":"110"},"rotate":false,"rotate_grad_x":{"start":"0","stop":"0"},"rotate_grad_y":{"start":"0","stop":"0"},"rotate_grad_z":{"start":"0","stop":"0"},"perspective":"400","origin":"center center","radius_units":"pc","radius":{"start":"0","stop":"0"}},"overlay":{"enable":true,"background":"rgba(0, 0, 0, 0.6)","opacity":"1","fade":true,"slide":false,"slide_direction":"0","scale":false,"scale_percents":{"start":"0","stop":"100"},"rotate":false,"rotate_grad_x":{"start":"0","stop":"0"},"rotate_grad_y":{"start":"0","stop":"0"},"rotate_grad_z":{"start":"0","stop":"0"},"perspective":"400","origin":"center center"},"buttons":{"enable":true,"set":{"link":true,"view":true},"link_single":false,"pphoto":true,"type":"background","background":"#ffffff","color":"#000000","radius":{"start":"50","stop":"0"},"size":28,"opacity":"1","fade":true,"slide":false,"slide_direction":"0","scale":false,"scale_percents":{"start":"0","stop":"100"},"rotate":false,"rotate_grad_x":{"start":"0","stop":"0"},"rotate_grad_y":{"start":"0","stop":"0"},"rotate_grad_z":{"start":"0","stop":"0"},"perspective":"400","origin":"center center"},"content":{"enable":false,"enable_parts":{"title":true,"excerpt":true,"categories":true,"shares":true},"always":false,"shares_enable":{"twitter":true,"facebook":true,"googleplus":true,"pinterest":true,"tumblr":false,"linkedin":false,"reddit":false,"digg":false},"title_type":"link","typo":{"title":{"size":18,"height":22,"color":"#ffffff","bold":"bold","italic":false,"underline":false,"uppercase":false},"excerpt":{"length":4,"size":12,"height":16,"color":"#ffffff","bold":false,"italic":false,"underline":false,"uppercase":false},"categories":{"size":12,"height":16,"color":"#ffffff","bold":false,"italic":false,"underline":0,"uppercase":false},"shares":{"size":14,"color":"#ffffff","radius":0}},"background":"rgba(0, 0, 0, 0.8)","opacity":"1","excerpt_length":4,"align":"center","partial":"full","partial_size":"70","margin":0,"fade":true,"slide":false,"slide_direction":"0","scale":true,"scale_percents":{"start":"0","stop":"100"},"rotate":false,"rotate_grad_x":{"start":"0","stop":"0"},"rotate_grad_y":{"start":"0","stop":"0"},"rotate_grad_z":{"start":"0","stop":"0"},"perspective":"400","origin":"center center","partial_position":"bottom"},"tplid":"","tplname":"<?php _e( 'Untitled', 'hitd' ); ?>"}</div>
<div id="hi-def-tpl" class="hide"></div>
<input id="hi-tpl-id" name="hi-tpl-id" type="hidden" value="">
<input id="hi-tpl-name" name="hi-tpl-name" type="hidden" value="<?php _e( 'Untitled', 'hitd' ); ?>">

<div class="blockWrap">
	<div class="hi-header-xl">
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<div id="hi-tpl-name-div" class="hi-header-title" data-emptytext="<?php _e( 'Untitled', 'hitd' ); ?>"><?php _e( 'Untitled', 'hitd' ); ?></div>
				<span id="hi-tpl-id-title" data-text=" ( <?php _e( 'Not saved yet...', 'hitd' ); ?> )"> ( <?php _e( 'Not saved yet...', 'hitd' ); ?> )</span>
			</div>
			<div class="col-xs-12 col-sm-6 text-right">
				<button type="button" class="btn btn-link hi-add-new"><?php _e( 'Reset to default', 'hitd' ); ?></button>
				<button type="button" class="btn btn-primary" id="hi-save"><?php _e( 'Save changes', 'hitd' ); ?><i class="hi-fb-refresh hi-spinner hi-btn-i-right hide"></i></button>
			</div>
		</div>
	</div>
</div>

<div id="hi-controls-block">
	<div id="hi-preview-block" style="width: 450px;" >
		<?php include( HI_PATH . 'templates/template-admin-preview-wrapper.php' ); ?>
	</div>
	<div id="hi-options-block" style="width: auto;">
		<?php include( HI_PATH . 'templates/template-admin-options-wrapper.php' ); ?>
	</div>
</div>