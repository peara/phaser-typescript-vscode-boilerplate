module MyGame {

	export class GameState extends Phaser.State {

		preload() {}

		create() {
			let logo = this.game.add.sprite(0, this.game.world.centerY, 'logo');
			logo.anchor.setTo(0.5, 0.5);
			let logo2 = this.game.add.sprite(0, 0, 'logo');
		}
	}
}
