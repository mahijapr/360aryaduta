var APP_DATA = {
  "scenes": [
    {
      "id": "0-lobby",
      "name": "Lobby",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.6200382220355714,
        "pitch": 0.06481122456265886,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": -0.12419313469011861,
          "pitch": 0.12335441762227362,
          "rotation": 3.141592653589793,
          "target": "1-lobby-lift"
        },
        {
          "yaw": 2.5664120387597285,
          "pitch": 0.07332027895635918,
          "rotation": 3.141592653589793,
          "target": "3-taruma-cafe-1"
        },
        {
          "yaw": 1.2695190387396202,
          "pitch": 0.03281580394802752,
          "rotation": 3.141592653589793,
          "target": "2-the-ballroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lobby-lift",
      "name": "Lobby lift",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.1234925528215793,
        "pitch": 0,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": -1.670221460563944,
          "pitch": 0.06291395607325612,
          "rotation": 3.141592653589793,
          "target": "0-lobby"
        },
        {
          "yaw": 3.114045285591647,
          "pitch": 0.07543360386976872,
          "rotation": 3.141592653589793,
          "target": "29-acl-entrance-lift"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-the-ballroom-1",
      "name": "The ballroom #1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.7410122491558662,
        "pitch": 0.1560590791898555,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": -1.333860567591298,
          "pitch": 0.11754356491227824,
          "rotation": 3.141592653589793,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-taruma-cafe-1",
      "name": "Taruma cafe #1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.09281794939541399,
        "pitch": 0.34395356140808175,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": -2.110993229204711,
          "pitch": 0.20526560613057399,
          "rotation": 3.141592653589793,
          "target": "0-lobby"
        },
        {
          "yaw": 1.9337592781712205,
          "pitch": 0.06049710340048797,
          "rotation": 3.141592653589793,
          "target": "4-taruma-cafe-2"
        },
        {
          "yaw": -1.6505103779199857,
          "pitch": 0.01750543437369423,
          "rotation": 3.141592653589793,
          "target": "5-taruma-cafe-3"
        },
        {
          "yaw": -2.9910961589815344,
          "pitch": -0.03129264465791337,
          "rotation": 3.141592653589793,
          "target": "18-swargaloka-bar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-taruma-cafe-2",
      "name": "Taruma cafe #2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.3433657491653239,
        "pitch": 0.1568998754839761,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": 2.9026898588951298,
          "pitch": 0.024080488024033286,
          "rotation": 3.141592653589793,
          "target": "3-taruma-cafe-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-taruma-cafe-3",
      "name": "Taruma cafe #3",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.7039349084581472,
        "pitch": 0.12695186922787371,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": -0.5650968087074375,
          "pitch": 0.050907318379049826,
          "rotation": 3.141592653589793,
          "target": "3-taruma-cafe-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-taruma-cafe-4",
      "name": "Taruma cafe #4",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.5968876930596956,
        "pitch": 0.1146269969688003,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": 0.5804636301628747,
          "pitch": 0.0698379765450472,
          "rotation": 3.141592653589793,
          "target": "5-taruma-cafe-3"
        },
        {
          "yaw": 1.9845859898444953,
          "pitch": 0.1374846122510185,
          "rotation": 3.141592653589793,
          "target": "7-mezanine-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-mezanine-1",
      "name": "Mezanine #1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.18845342124406805,
        "pitch": 0.11380370980488941,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": -3.110286781033139,
          "pitch": -0.0011623382066368038,
          "rotation": 3.141592653589793,
          "target": "6-taruma-cafe-4"
        },
        {
          "yaw": -0.006897117937340269,
          "pitch": 0.0330314144444408,
          "rotation": 3.141592653589793,
          "target": "4-taruma-cafe-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-mezanine-2",
      "name": "Mezanine #2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.925697768803502,
        "pitch": -0.0037049600762930623,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": 3.0072396939336627,
          "pitch": -0.004959006348604689,
          "rotation": 3.141592653589793,
          "target": "7-mezanine-1"
        },
        {
          "yaw": 1.8236395971547337,
          "pitch": 0.09538468821578405,
          "rotation": 3.141592653589793,
          "target": "9-mezanine-3"
        },
        {
          "yaw": -2.7068509494881976,
          "pitch": 0.039837491199442354,
          "rotation": 3.141592653589793,
          "target": "10-galunggung-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-mezanine-3",
      "name": "Mezanine #3",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.014279966607226413,
        "pitch": -0.009022888795907846,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": 0.172380963281908,
          "pitch": 0.048318387839152876,
          "rotation": 3.141592653589793,
          "target": "8-mezanine-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-galunggung-1",
      "name": "Galunggung #1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.03367877452275536,
        "pitch": 0.21156095829615928,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": -0.0456136913830818,
          "pitch": 0.464244385128298,
          "rotation": 3.141592653589793,
          "target": "11-galunggung-2"
        },
        {
          "yaw": 3.039187326246104,
          "pitch": 0.09111415168679748,
          "rotation": 3.141592653589793,
          "target": "8-mezanine-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-galunggung-2",
      "name": "Galunggung #2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.08290357621411104,
        "pitch": 0.1804609866467306,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": -0.11711408854438154,
          "pitch": 0.5206933015708284,
          "rotation": 3.141592653589793,
          "target": "10-galunggung-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-business-king-bed-room-",
      "name": "Business king bed room ",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.552052159707042,
        "pitch": 0.28119535373440385,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": -1.2989592938954537,
          "pitch": 0.09570008223360205,
          "rotation": 9.42477796076938,
          "target": "13-business-balcony"
        },
        {
          "yaw": 1.621000073089622,
          "pitch": 0.0974638354764803,
          "rotation": 3.141592653589793,
          "target": "18-swargaloka-bar"
        },
        {
          "yaw": 1.440668675108233,
          "pitch": 0.12451834997602695,
          "rotation": 3.141592653589793,
          "target": "14-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-business-balcony",
      "name": "Business balcony",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -3.140488060468808,
        "pitch": 0.08940914686143842,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": 0.0005342910291474823,
          "pitch": 0.1311799595653511,
          "rotation": 3.141592653589793,
          "target": "12-business-king-bed-room-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bathroom",
      "name": "Bathroom",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.3937945047561868,
        "pitch": 0.1575476814949166,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": 2.7080505029204414,
          "pitch": 0.0484528567531779,
          "rotation": 3.141592653589793,
          "target": "12-business-king-bed-room-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-gym-entrance",
      "name": "Gym entrance",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0892534303854395,
          "pitch": 0.05126579909667761,
          "rotation": 3.141592653589793,
          "target": "18-swargaloka-bar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-gym-1",
      "name": "Gym #1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "17-gym-2",
      "name": "Gym #2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "18-swargaloka-bar",
      "name": "Swargaloka bar",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.3159177722264914,
        "pitch": 0.2046003723101144,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": -1.7809987422585216,
          "pitch": 0.0230181894320598,
          "rotation": 3.141592653589793,
          "target": "3-taruma-cafe-1"
        },
        {
          "yaw": -1.556482291285251,
          "pitch": 0.030121843382893587,
          "rotation": 3.141592653589793,
          "target": "12-business-king-bed-room-"
        },
        {
          "yaw": -1.036669624709159,
          "pitch": 0.003971983821486447,
          "rotation": 3.141592653589793,
          "target": "15-gym-entrance"
        },
        {
          "yaw": 1.3196098448435443,
          "pitch": 0.08454081725462359,
          "rotation": 3.141592653589793,
          "target": "19-swargaloka-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-swargaloka-1",
      "name": "Swargaloka #1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.119245127633392,
          "pitch": 0.08398369526214466,
          "rotation": 3.141592653589793,
          "target": "18-swargaloka-bar"
        },
        {
          "yaw": 0.2993464745740848,
          "pitch": 0.015044578715373902,
          "rotation": 3.141592653589793,
          "target": "22-pool-1"
        },
        {
          "yaw": 1.205072736641064,
          "pitch": 0.07113077603804996,
          "rotation": 3.141592653589793,
          "target": "20-swargaloka-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-swargaloka-6",
      "name": "Swargaloka #6",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.10452879429279704,
        "pitch": 0.09634829154098767,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": 0.06543404153373089,
          "pitch": 0.08547000854158426,
          "rotation": 3.141592653589793,
          "target": "19-swargaloka-1"
        },
        {
          "yaw": 2.2389626377689673,
          "pitch": 0.020782686420515617,
          "rotation": 3.141592653589793,
          "target": "21-swargaloka-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-swargaloka-3",
      "name": "Swargaloka #3",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1882692049556205,
          "pitch": 0.05408411567641558,
          "rotation": 3.141592653589793,
          "target": "20-swargaloka-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-pool-1",
      "name": "Pool #1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6602064432020445,
          "pitch": 0.15869702556008924,
          "rotation": 3.141592653589793,
          "target": "19-swargaloka-1"
        },
        {
          "yaw": 1.3894470200746447,
          "pitch": 0.06630783238969684,
          "rotation": 3.141592653589793,
          "target": "24-kids-club"
        },
        {
          "yaw": -0.09107373859471934,
          "pitch": 0.11552034795719379,
          "rotation": 3.141592653589793,
          "target": "23-pool-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-pool-2",
      "name": "Pool #2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.488600436754858,
          "pitch": 0.0769763857310437,
          "rotation": 3.141592653589793,
          "target": "22-pool-1"
        },
        {
          "yaw": -3.099975963089131,
          "pitch": 0.04090806467256769,
          "rotation": 3.141592653589793,
          "target": "25-tennis-count-entrance-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-kids-club",
      "name": "Kids club",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6710048577854142,
          "pitch": 0.11751890458231529,
          "rotation": 3.141592653589793,
          "target": "22-pool-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-tennis-count-entrance-6",
      "name": "Tennis count entrance #6",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.044262305492244636,
        "pitch": 0.20003301168845056,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": 3.1338433763228917,
          "pitch": 0.15260282068357434,
          "rotation": 3.141592653589793,
          "target": "23-pool-2"
        },
        {
          "yaw": 0.005951359129092282,
          "pitch": 0.12909109381092065,
          "rotation": 3.141592653589793,
          "target": "26-tennis-count-entrance-gate-5"
        },
        {
          "yaw": -3.038507732581607,
          "pitch": 0.028984189751639633,
          "rotation": 3.141592653589793,
          "target": "28-helipad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-tennis-count-entrance-gate-5",
      "name": "Tennis count entrance gate #5",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.7417637186042256,
        "pitch": -0.07306868939134858,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": 0.010703426027754759,
          "pitch": 0.17371531662760908,
          "rotation": 3.141592653589793,
          "target": "25-tennis-count-entrance-6"
        },
        {
          "yaw": -2.5935830223018286,
          "pitch": 0.04409122005878885,
          "rotation": 3.141592653589793,
          "target": "27-tennis-court-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-tennis-court-1",
      "name": "Tennis court #1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.4163068431976207,
        "pitch": -0.09681341113308406,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": -1.4382440499818916,
          "pitch": 0.10482193369461612,
          "rotation": 3.141592653589793,
          "target": "26-tennis-count-entrance-gate-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-helipad",
      "name": "Helipad",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03197420802015216,
          "pitch": 0.28647499247606234,
          "rotation": 3.141592653589793,
          "target": "25-tennis-count-entrance-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-acl-entrance-lift",
      "name": "ACL entrance lift",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.044804387281541125,
          "pitch": 0.025089626121861386,
          "rotation": 3.141592653589793,
          "target": "1-lobby-lift"
        },
        {
          "yaw": -1.8352603949743465,
          "pitch": 0.006887750352927213,
          "rotation": 3.141592653589793,
          "target": "30-acl-1"
        },
        {
          "yaw": 1.468108262551862,
          "pitch": -0.010256603344409143,
          "rotation": 3.141592653589793,
          "target": "33-deluxe-room-entrance-2"
        },
        {
          "yaw": 1.0970290537787957,
          "pitch": 0.011093131702413217,
          "rotation": 3.141592653589793,
          "target": "38-aryaduta-suite-living-room"
        },
        {
          "yaw": -1.1682936516710942,
          "pitch": 0.02408121467601454,
          "rotation": 3.141592653589793,
          "target": "41-executive-suite-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-acl-1",
      "name": "ACL #1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9646248603441965,
          "pitch": 0.161242608641043,
          "rotation": 3.141592653589793,
          "target": "32-acl-smoking-room"
        },
        {
          "yaw": -0.4012229501744038,
          "pitch": 0.17136657515162135,
          "rotation": 3.141592653589793,
          "target": "31-acl-2"
        },
        {
          "yaw": -1.9399976093387217,
          "pitch": 0.024984914494574184,
          "rotation": 3.141592653589793,
          "target": "29-acl-entrance-lift"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-acl-2",
      "name": "ACL #2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.043699314655132326,
        "pitch": 0.22489512686664526,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": -2.004431351344948,
          "pitch": 0.19918809951309058,
          "rotation": 3.141592653589793,
          "target": "30-acl-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-acl-smoking-room",
      "name": "ACL smoking room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.14823102172335467,
        "pitch": 0.14518472379900338,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": 0.6993760898155994,
          "pitch": 0.14979394401754398,
          "rotation": 3.141592653589793,
          "target": "30-acl-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-deluxe-room-entrance-2",
      "name": "Deluxe room entrance #2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.05235987755983018,
        "pitch": 0.025779682274020388,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": -0.4080594691743933,
          "pitch": 0.04552114382919292,
          "rotation": 3.141592653589793,
          "target": "36-deluxe-twin-bed-living-room"
        },
        {
          "yaw": 0.2951669496451572,
          "pitch": 0.0430523131011995,
          "rotation": 3.141592653589793,
          "target": "34-deluxe-king-bed-living-room"
        },
        {
          "yaw": 2.6994105271236037,
          "pitch": -0.03618965313821576,
          "rotation": 3.141592653589793,
          "target": "29-acl-entrance-lift"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-deluxe-king-bed-living-room",
      "name": "Deluxe king bed living room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.5160005259097495,
        "pitch": 0.01542087162008876,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": 2.9475787348483244,
          "pitch": 0.1681291821829749,
          "rotation": 3.141592653589793,
          "target": "35-deluxe-king-bed-room"
        },
        {
          "yaw": 1.0933219793466478,
          "pitch": 0.0821883499955618,
          "rotation": 3.141592653589793,
          "target": "33-deluxe-room-entrance-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-deluxe-king-bed-room",
      "name": "Deluxe king bed room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.8441062331319928,
        "pitch": 0.21573902495658004,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": 0.8919613346611062,
          "pitch": 0.2548343498681547,
          "rotation": 3.141592653589793,
          "target": "34-deluxe-king-bed-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-deluxe-twin-bed-living-room",
      "name": "Deluxe twin bed living room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.7290062952661671,
        "pitch": 0.123211716750804,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": 1.8799183847777243,
          "pitch": 0.14970065544282463,
          "rotation": 3.141592653589793,
          "target": "33-deluxe-room-entrance-2"
        },
        {
          "yaw": 0.03260794089212382,
          "pitch": 0.2841617908386773,
          "rotation": 3.141592653589793,
          "target": "37-deluxe-twin-bed-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-deluxe-twin-bed-room",
      "name": "Deluxe twin bed room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.0993506787112963,
        "pitch": 0.1934738778387981,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": -1.5834283626751073,
          "pitch": 0.30964706846260803,
          "rotation": 3.141592653589793,
          "target": "36-deluxe-twin-bed-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-aryaduta-suite-living-room",
      "name": "Aryaduta suite living room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.0127983236825635,
        "pitch": 0.03884461421801788,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": 0.07387125930475058,
          "pitch": 0.018841350600808937,
          "rotation": 3.141592653589793,
          "target": "29-acl-entrance-lift"
        },
        {
          "yaw": -2.768770427511898,
          "pitch": -0.029340644571126617,
          "rotation": 3.141592653589793,
          "target": "39-aryaduta-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-aryaduta-suite",
      "name": "Aryaduta suite",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.096915840175166,
        "pitch": 0.586678947365888,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": -2.387300355978395,
          "pitch": 0.1731564117679767,
          "rotation": 3.141592653589793,
          "target": "38-aryaduta-suite-living-room"
        },
        {
          "yaw": 1.2653384794820255,
          "pitch": 0.2674172137017692,
          "rotation": 3.141592653589793,
          "target": "40-aryaduta-suite-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-aryaduta-suite-bathroom",
      "name": "Aryaduta suite bathroom",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.8394846863943108,
        "pitch": 0.1278161558706774,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": 2.0536976914701564,
          "pitch": 0.17278836444671342,
          "rotation": 3.141592653589793,
          "target": "39-aryaduta-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-executive-suite-living-room",
      "name": "Executive suite living room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.404453044145507,
          "pitch": 0.06285204224417384,
          "rotation": 3.141592653589793,
          "target": "45-president-suite-entrance"
        },
        {
          "yaw": -2.2840889697313536,
          "pitch": 0.06756916474662944,
          "rotation": 3.141592653589793,
          "target": "29-acl-entrance-lift"
        },
        {
          "yaw": -0.9553889155594071,
          "pitch": 0.09541288982448393,
          "rotation": 3.141592653589793,
          "target": "42-executive-suite-toilet"
        },
        {
          "yaw": 1.7813481615702225,
          "pitch": 0.08211919843882143,
          "rotation": 3.141592653589793,
          "target": "43-executive-suite-bed-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-executive-suite-toilet",
      "name": "Executive suite toilet",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6130823041529556,
          "pitch": -0.024013757141464254,
          "rotation": 3.141592653589793,
          "target": "41-executive-suite-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-executive-suite-bed-room",
      "name": "Executive suite bed room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9638001116011115,
          "pitch": 0.22131414826072238,
          "rotation": 9.42477796076938,
          "target": "41-executive-suite-living-room"
        },
        {
          "yaw": -1.1466863331014618,
          "pitch": 0.14529172319181605,
          "rotation": 3.141592653589793,
          "target": "44-executive-suite-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-executive-suite-bathroom",
      "name": "Executive suite bathroom",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.301039029316586,
          "pitch": 0.04235585454377855,
          "rotation": 3.141592653589793,
          "target": "43-executive-suite-bed-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-president-suite-entrance",
      "name": "President suite entrance",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.006998944195219,
        "pitch": 0.02220319015288119,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": 2.388007142381417,
          "pitch": 0.10705604268100899,
          "rotation": 3.141592653589793,
          "target": "46-president-suite-living-room"
        },
        {
          "yaw": 0.11118625568024498,
          "pitch": 0.1482672840755015,
          "rotation": 3.141592653589793,
          "target": "41-executive-suite-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-president-suite-living-room",
      "name": "President suite living room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.06896949072208614,
        "pitch": 0.16957428457178736,
        "fov": 1.4479588735060953
      },
      "linkHotspots": [
        {
          "yaw": -2.320904699132168,
          "pitch": 0.1862049065439777,
          "rotation": 3.141592653589793,
          "target": "45-president-suite-entrance"
        },
        {
          "yaw": 2.448298917910159,
          "pitch": 0.17448099397147132,
          "rotation": 3.141592653589793,
          "target": "47-president-suite-toilet-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-president-suite-toilet-2",
      "name": "President suite toilet #2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7586251310931367,
          "pitch": 0.5407592591962747,
          "rotation": 9.42477796076938,
          "target": "46-president-suite-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-president-suite-dining-room-2",
      "name": "President suite dining room #2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.883102832576375,
          "pitch": 0.21629767200924555,
          "rotation": 3.141592653589793,
          "target": "49-president-suite-balcony"
        },
        {
          "yaw": -0.6263718485442364,
          "pitch": 0.06082911502882027,
          "rotation": 3.141592653589793,
          "target": "50-president-suite-bed-room"
        },
        {
          "yaw": 1.4033976469149572,
          "pitch": 0.169763118893675,
          "rotation": 3.141592653589793,
          "target": "46-president-suite-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-president-suite-balcony",
      "name": "President suite balcony",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2705703310450787,
          "pitch": 0.043495807706603884,
          "rotation": 3.141592653589793,
          "target": "48-president-suite-dining-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-president-suite-bed-room",
      "name": "President suite bed room",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5880889807281502,
          "pitch": 0.0690482390920657,
          "rotation": 3.141592653589793,
          "target": "48-president-suite-dining-room-2"
        },
        {
          "yaw": 3.102738539445941,
          "pitch": 0.06880964240079024,
          "rotation": 3.141592653589793,
          "target": "51-president-suite-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-president-suite-bathroom",
      "name": "President suite bathroom",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3500573862137344,
          "pitch": 0.14726452768927523,
          "rotation": 3.141592653589793,
          "target": "50-president-suite-bed-room"
        },
        {
          "yaw": 1.8129247860437614,
          "pitch": 0.26656474507905337,
          "rotation": 3.141592653589793,
          "target": "52-president-suite-toilet-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-president-suite-toilet-1",
      "name": "President suite toilet #1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4561087687017711,
          "pitch": 0.4052548984152331,
          "rotation": 3.141592653589793,
          "target": "51-president-suite-bathroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Aryaduta Virtual Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
