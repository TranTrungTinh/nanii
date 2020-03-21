<template>
	<figure :class="className" :style="[styleObject, cssVars]" @click="handleClick">
		<img v-lazy="imageData.src" class="gallery-image" :alt="imageData.name"/>
		<figcaption class="image-title">
			{{imageData.title}}
		</figcaption>
		<div class="image-description">
			<i>{{imageData.description}}</i>
		</div>
	</figure>
</template>

<script>
import { mixin } from '~/utils/mixin'

export default {
	props: ["index", "data", "position", "center", "inverse"],
  mixins: [mixin],
	data: function(){
		return {
			className: "gallery-figure",
			imageData: this.data
		}
	},
	computed: {
		styleObject() { 
			let position = this.position;
			let styleObject = {
				left: position.left + "px",
				top: position.top + "px"
			};
			if(position.rotate !== 0){
				styleObject["WebkitTransform"] = "rotate(" + position.rotate + "deg)";
				styleObject["transform"] = "rotate(" + position.rotate + "deg)";
			}

			this.className = 
				`gallery-figure${position.inverse === true ? " inverse" : ""}${position.center === true ? " active" : ""}`;

			if(position.center === true) styleObject.zIndex = 101;

			return styleObject;
		}
	},
	methods: {
		handleClick(e) {
			e.preventDefault();
			e.stopPropagation();
			
			if(this.position.center !== true){
				this.$emit("center", this.index)
			}else{
				this.$emit("inverse", this.index);
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.gallery {
	&-figure{
		position: absolute;
		z-index: 100;
		width: 380px;
		height: 400px;
		padding: 40px;
		margin: 0;
		background-color: var(--card-color);
		box-sizing: border-box;
		color: #555555;
		cursor: pointer;
		-webkit-transition: transform .6s ease-in-out,
		left .6s ease-in-out, top .6s ease-in-out;
		transition: transform .6s ease-in-out,
		left .6s ease-in-out, top .6s ease-in-out;
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;

		&.inverse{
			-webkit-transform: rotateY(180deg);
			transform: rotateY(180deg);
		}
	}
	
	&-image{
		width: 300px;
		height: 320px;
	}

	.image {
		&-title{
			font-size: 16px;
			margin-top: 10px;
			height: 60px;
			text-align: center;
		}

		&-description{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			padding: 40px;

			font-size: 18px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: var(--text-color);
			box-sizing: border-box;
			background-color: var(--card-color);
			-webkit-transform: rotateY(180deg) translateZ(1px);
			transform: rotateY(180deg) translateZ(1px);
		}
	}
}
@media screen and (max-width: 768px){ 
	.gallery-figure{
		cursor: default;
	}
}
@media screen and (min-width: 1000px){ 
	.gallery-figure{
		&.active {
			width: 480px;
			height: 500px;

			.gallery-image {
				width: 400px;
				height: 420px;
			}
		}
	}
}
</style>