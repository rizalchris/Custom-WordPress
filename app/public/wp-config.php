<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'S?ZBRq|E5ouAhU7=Ns+GWpd,m8Tw&WO{5N$?[S1ihY 7nLEIG.o$o[1JKz.b@KU/' );
define( 'SECURE_AUTH_KEY',   'As|=efDYnb0Ko_Ek9AjxH0y08{FsF:!PN%%EECqt:[@)MpprD>p0zUt#ZL3m?6(w' );
define( 'LOGGED_IN_KEY',     '-ZR|]irG3K7[:Gr %4fDItP%^@V%V(lok7tzBpbb.rFR+4|yzX&D2/(lON;9.pxO' );
define( 'NONCE_KEY',         'MP#rpn$9Y~S@]p m*;Q@;/st~v4|.(TVR3?hyH#XaK}+~iY wKMDJQ#d!~O#C3{g' );
define( 'AUTH_SALT',         'Hbra6w/~Y-f3s[S#^ILhCo1HhfQ.,`6iO^5J`jd^BPhs2WM]7AQC:e~4N2h*Ph4C' );
define( 'SECURE_AUTH_SALT',  ',&VX=ETNhh@!Qmm9ltooxH-{S8t*}?-=v)E:Xp2vG*?3_ 7He>~K1&@([`h}_wx%' );
define( 'LOGGED_IN_SALT',    't7;B9GMN~^0wW*<?wOdhS?RWTy<XYk#j[.]=l2n-P,fjK}^~g>XIWy7$s{R(`xD&' );
define( 'NONCE_SALT',        'FI{NOo9s_ZS3VIi;4s/J*Iq8,7(;^m7~VAimYEG_Ta`,9PWKuw ~tg>o.TH]gv+Z' );
define( 'WP_CACHE_KEY_SALT', 'R0U3@7n<b7iN|U J2+Nj&9x%jGzOf<0ggaX:+ZK#<=O5pa.w]yL75YhA:oFmiM-?' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
