<template>
	<div class="layui-side layui-bg-black">
		<div class="layui-side-scroll">
			<!-- 左侧导航区域（可配合layui已有的垂直导航） -->
			<ul class="layui-nav layui-nav-tree"  lay-filter="test">
				<li class="layui-nav-item" v-for="(nav, index) in navInitData" :class="{'layui-nav-itemed' : index === 0}">
					<a class="" href="javascript:;">{{nav.parent}}</a>
					<dl class="layui-nav-child" v-for="child in nav.child">
						<dd>
							<router-link :to="child.url">{{child.text}}</router-link>
						</dd>
					</dl>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				navInitData : [
					{
						parent : '所有商品',
						child : [
							{
								url : '/product/1',
								text : '列表一'
							}, {
								url : '/product/2',
								text : '列表二'
							}, {
								url : '/product/3',
								text : '列表三'
							}, {
								url : '/product/4',
								text : '列表四'
							}
						]
					},
					{
						parent : '解决方案',
						child : [
							{
								url : '/resolve/1',
								text : '列表一'
							}, {
								url : '/resolve/2',
								text : '列表二'
							}, {
								url : '/resolve/3',
								text : '列表三'
							}
						]
					},
					{
						parent : '云市场',
						child : []
					},
					{
						parent : '发布商品',
						child : []
					}
				]
			}
		}
	}
	
</script>

<style rel="stylesheet">

</style>