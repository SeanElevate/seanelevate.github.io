var APP_DATA = {
  "scenes": [
    {
      "id": "0-gallerypano",
      "name": "gallerypano",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.555011446629539,
        "pitch": -0.049184708947324296,
        "fov": 1.5280022041422885
      },
      "linkHotspots": [
        {
          "yaw": -1.577544262905061,
          "pitch": 0.22572390055607272,
          "rotation": 6.283185307179586,
          "target": "1-gallerypano_01"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2955937850519295,
          "pitch": -0.1560878206381915,
          "title": "Animation",
          "text": "Artist"
        }
      ]
    },
    {
      "id": "1-gallerypano_01",
      "name": "gallerypano_01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.5471284544955424,
        "pitch": -0.050684951161800385,
        "fov": 1.5280022041422885
      },
      "linkHotspots": [
        {
          "yaw": 1.5644642302518905,
          "pitch": 0.2673836390651356,
          "rotation": 0,
          "target": "0-gallerypano"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Gallery Test",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
