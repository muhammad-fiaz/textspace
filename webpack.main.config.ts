import type { Configuration } from 'webpack';
import { rules } from './webpack.rules';

export const mainConfig: Configuration = {
  entry: './src/index.ts',
  // Put your normal webpack config below here
  module: {
    rules: [
      ...rules, // Existing rules
      {
        test: /\.(png|jpeg|jpg|gif|svg|bmp)$/i,
        type: 'asset/resource', // Use asset/resource to allow direct image imports
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]', // Output path for the bundled images
            },
          },
        ],
      },
      // Add other rules as needed
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
};
