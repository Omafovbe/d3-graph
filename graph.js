  
    //Apply API call to retrive this data and add to your tick history 
        var tickHistory = [{"time":"2018-06-07T21:25:00+00:00","open":"7660.00000000","high":"7660.00000000","low":"7660.00000000","close":"7660.00000000","volume":"0.27560000"},{"time":"2018-06-07T21:24:00+00:00","open":"7660.00000000","high":"7660.00000000","low":"7659.99000000","close":"7660.00000000","volume":"0.42518562"},{"time":"2018-06-07T21:23:00+00:00","open":"7659.99000000","high":"7660.00000000","low":"7659.99000000","close":"7659.99000000","volume":"3.60071492"},{"time":"2018-06-07T21:22:00+00:00","open":"7660.00000000","high":"7660.00000000","low":"7660.00000000","close":"7660.00000000","volume":"0.26343156"},{"time":"2018-06-07T21:21:00+00:00","open":"7660.00000000","high":"7660.00000000","low":"7659.99000000","close":"7660.00000000","volume":"2.09108878"},{"time":"2018-06-07T21:20:00+00:00","open":"7659.93000000","high":"7660.00000000","low":"7659.93000000","close":"7660.00000000","volume":"1.23430000"},{"time":"2018-06-07T21:19:00+00:00","open":"7659.93000000","high":"7659.94000000","low":"7659.93000000","close":"7659.93000000","volume":"0.88621675"},{"time":"2018-06-07T21:18:00+00:00","open":"7654.56000000","high":"7659.94000000","low":"7654.56000000","close":"7657.95000000","volume":"0.53461831"},{"time":"2018-06-07T21:17:00+00:00","open":"7650.00000000","high":"7654.54000000","low":"7649.99000000","close":"7652.59000000","volume":"9.72879652"},{"time":"2018-06-07T21:16:00+00:00","open":"7649.99000000","high":"7650.00000000","low":"7649.99000000","close":"7649.99000000","volume":"1.38963999"},{"time":"2018-06-07T21:15:00+00:00","open":"7649.69000000","high":"7650.00000000","low":"7648.50000000","close":"7649.99000000","volume":"0.52140000"},{"time":"2018-06-07T21:14:00+00:00","open":"7648.49000000","high":"7648.50000000","low":"7648.49000000","close":"7648.50000000","volume":"0.66650000"},{"time":"2018-06-07T21:13:00+00:00","open":"7648.50000000","high":"7648.50000000","low":"7648.49000000","close":"7648.50000000","volume":"4.14645706"},{"time":"2018-06-07T21:12:00+00:00","open":"7647.46000000","high":"7648.50000000","low":"7643.67000000","close":"7648.50000000","volume":"22.17447584"},{"time":"2018-06-07T21:11:00+00:00","open":"7654.90000000","high":"7654.90000000","low":"7647.46000000","close":"7647.46000000","volume":"1.75041900"},{"time":"2018-06-07T21:10:00+00:00","open":"7654.68000000","high":"7655.17000000","low":"7654.68000000","close":"7654.90000000","volume":"1.66830000"},{"time":"2018-06-07T21:09:00+00:00","open":"7651.92000000","high":"7654.69000000","low":"7651.92000000","close":"7654.69000000","volume":"1.05986841"},{"time":"2018-06-07T21:08:00+00:00","open":"7659.99000000","high":"7660.00000000","low":"7651.92000000","close":"7659.99000000","volume":"0.93818299"},{"time":"2018-06-07T21:07:00+00:00","open":"7660.00000000","high":"7660.00000000","low":"7659.99000000","close":"7660.00000000","volume":"1.54081690"},{"time":"2018-06-07T21:06:00+00:00","open":"7659.99000000","high":"7660.00000000","low":"7650.00000000","close":"7659.99000000","volume":"41.27251540"},{"time":"2018-06-07T21:05:00+00:00","open":"7660.00000000","high":"7660.00000000","low":"7659.99000000","close":"7660.00000000","volume":"2.64869962"},{"time":"2018-06-07T21:04:00+00:00","open":"7660.00000000","high":"7660.00000000","low":"7659.99000000","close":"7659.99000000","volume":"0.32500000"},{"time":"2018-06-07T21:03:00+00:00","open":"7660.00000000","high":"7660.00000000","low":"7659.99000000","close":"7659.99000000","volume":"0.53839200"},{"time":"2018-06-07T21:02:00+00:00","open":"7659.99000000","high":"7660.00000000","low":"7659.99000000","close":"7660.00000000","volume":"1.00100000"},{"time":"2018-06-07T21:01:00+00:00","open":"7660.00000000","high":"7660.00000000","low":"7659.99000000","close":"7659.99000000","volume":"1.10438867"},{"time":"2018-06-07T21:00:00+00:00","open":"7663.63000000","high":"7663.63000000","low":"7658.33000000","close":"7658.33000000","volume":"2.71972470"},{"time":"2018-06-07T20:59:00+00:00","open":"7660.00000000","high":"7661.00000000","low":"7654.62000000","close":"7661.00000000","volume":"18.51386475"},{"time":"2018-06-07T20:58:00+00:00","open":"7660.00000000","high":"7660.00000000","low":"7659.99000000","close":"7660.00000000","volume":"3.95136151"},{"time":"2018-06-07T20:57:00+00:00","open":"7655.75000000","high":"7660.00000000","low":"7655.75000000","close":"7660.00000000","volume":"2.05123798"},{"time":"2018-06-07T20:56:00+00:00","open":"7658.08000000","high":"7660.00000000","low":"7649.97000000","close":"7655.75000000","volume":"25.88273292"},{"time":"2018-06-07T20:55:00+00:00","open":"7656.37000000","high":"7658.08000000","low":"7656.37000000","close":"7658.08000000","volume":"2.21495615"},{"time":"2018-06-07T20:54:00+00:00","open":"7650.00000000","high":"7656.37000000","low":"7649.99000000","close":"7656.37000000","volume":"1.85598748"},{"time":"2018-06-07T20:53:00+00:00","open":"7643.32000000","high":"7650.00000000","low":"7643.32000000","close":"7649.03000000","volume":"5.75971760"},{"time":"2018-06-07T20:52:00+00:00","open":"7644.53000000","high":"7646.08000000","low":"7638.50000000","close":"7643.31000000","volume":"6.23583305"},{"time":"2018-06-07T20:51:00+00:00","open":"7641.22000000","high":"7649.04000000","low":"7635.00000000","close":"7641.25000000","volume":"18.95654246"},{"time":"2018-06-07T20:50:00+00:00","open":"7654.99000000","high":"7655.67000000","low":"7649.04000000","close":"7649.05000000","volume":"1.92920417"},{"time":"2018-06-07T20:49:00+00:00","open":"7648.02000000","high":"7655.00000000","low":"7648.02000000","close":"7655.00000000","volume":"8.94564420"},{"time":"2018-06-07T20:48:00+00:00","open":"7641.27000000","high":"7648.02000000","low":"7641.27000000","close":"7645.93000000","volume":"5.40376380"},{"time":"2018-06-07T20:47:00+00:00","open":"7652.74000000","high":"7652.74000000","low":"7635.00000000","close":"7641.28000000","volume":"71.70302786"},{"time":"2018-06-07T20:46:00+00:00","open":"7667.87000000","high":"7667.87000000","low":"7652.73000000","close":"7652.74000000","volume":"33.41266178"},{"time":"2018-06-07T20:45:00+00:00","open":"7667.86000000","high":"7667.87000000","low":"7667.86000000","close":"7667.86000000","volume":"3.54234541"},{"time":"2018-06-07T20:44:00+00:00","open":"7667.87000000","high":"7667.87000000","low":"7667.86000000","close":"7667.87000000","volume":"1.94856516"},{"time":"2018-06-07T20:43:00+00:00","open":"7667.86000000","high":"7667.87000000","low":"7667.86000000","close":"7667.87000000","volume":"1.88462908"},{"time":"2018-06-07T20:42:00+00:00","open":"7667.87000000","high":"7667.87000000","low":"7667.87000000","close":"7667.87000000","volume":"1.45140000"},{"time":"2018-06-07T20:41:00+00:00","open":"7667.86000000","high":"7667.87000000","low":"7667.86000000","close":"7667.86000000","volume":"0.91426834"},{"time":"2018-06-07T20:40:00+00:00","open":"7666.10000000","high":"7668.52000000","low":"7666.09000000","close":"7666.67000000","volume":"1.38996816"},{"time":"2018-06-07T20:39:00+00:00","open":"7671.22000000","high":"7671.22000000","low":"7668.53000000","close":"7668.53000000","volume":"6.73896303"},{"time":"2018-06-07T20:38:00+00:00","open":"7674.00000000","high":"7674.00000000","low":"7671.22000000","close":"7671.22000000","volume":"6.52920000"},{"time":"2018-06-07T20:37:00+00:00","open":"7674.81000000","high":"7676.63000000","low":"7673.99000000","close":"7673.99000000","volume":"1.48497933"},{"time":"2018-06-07T20:36:00+00:00","open":"7678.42000000","high":"7678.42000000","low":"7676.63000000","close":"7676.64000000","volume":"2.81175676"},{"time":"2018-06-07T20:35:00+00:00","open":"7679.87000000","high":"7679.87000000","low":"7678.41000000","close":"7678.41000000","volume":"1.44420000"},{"time":"2018-06-07T20:34:00+00:00","open":"7680.97000000","high":"7680.97000000","low":"7679.86000000","close":"7679.86000000","volume":"4.75458234"},{"time":"2018-06-07T20:33:00+00:00","open":"7678.40000000","high":"7680.97000000","low":"7678.40000000","close":"7680.96000000","volume":"14.11394708"},{"time":"2018-06-07T20:32:00+00:00","open":"7668.00000000","high":"7678.40000000","low":"7668.00000000","close":"7678.39000000","volume":"27.18843808"},{"time":"2018-06-07T20:31:00+00:00","open":"7666.01000000","high":"7668.00000000","low":"7666.01000000","close":"7668.00000000","volume":"10.49718629"},{"time":"2018-06-07T20:30:00+00:00","open":"7666.02000000","high":"7666.02000000","low":"7666.01000000","close":"7666.02000000","volume":"2.51036328"},{"time":"2018-06-07T20:29:00+00:00","open":"7670.01000000","high":"7670.01000000","low":"7666.01000000","close":"7666.02000000","volume":"3.25838456"},{"time":"2018-06-07T20:28:00+00:00","open":"7671.30000000","high":"7671.31000000","low":"7670.00000000","close":"7670.00000000","volume":"5.91194106"},{"time":"2018-06-07T20:27:00+00:00","open":"7672.67000000","high":"7672.67000000","low":"7671.30000000","close":"7671.30000000","volume":"5.95213955"},{"time":"2018-06-07T20:26:00+00:00","open":"7679.31000000","high":"7679.31000000","low":"7672.67000000","close":"7676.51000000","volume":"4.02663652"},{"time":"2018-06-07T20:25:00+00:00","open":"7680.00000000","high":"7680.00000000","low":"7679.30000000","close":"7679.31000000","volume":"3.08895456"},{"time":"2018-06-07T20:24:00+00:00","open":"7680.00000000","high":"7680.50000000","low":"7680.00000000","close":"7680.01000000","volume":"1.05703218"},{"time":"2018-06-07T20:23:00+00:00","open":"7680.81000000","high":"7680.81000000","low":"7680.50000000","close":"7680.50000000","volume":"0.38268553"},{"time":"2018-06-07T20:22:00+00:00","open":"7680.80000000","high":"7680.80000000","low":"7680.80000000","close":"7680.80000000","volume":"0.67270308"},{"time":"2018-06-07T20:21:00+00:00","open":"7680.80000000","high":"7680.81000000","low":"7680.80000000","close":"7680.80000000","volume":"0.83916611"},{"time":"2018-06-07T20:20:00+00:00","open":"7680.98000000","high":"7680.98000000","low":"7680.80000000","close":"7680.80000000","volume":"6.69052701"},{"time":"2018-06-07T20:19:00+00:00","open":"7685.20000000","high":"7685.21000000","low":"7680.98000000","close":"7680.98000000","volume":"4.57200179"},{"time":"2018-06-07T20:18:00+00:00","open":"7685.20000000","high":"7685.21000000","low":"7685.20000000","close":"7685.21000000","volume":"1.74546400"},{"time":"2018-06-07T20:17:00+00:00","open":"7685.20000000","high":"7685.21000000","low":"7685.20000000","close":"7685.21000000","volume":"0.61885021"},{"time":"2018-06-07T20:16:00+00:00","open":"7687.18000000","high":"7687.19000000","low":"7685.20000000","close":"7685.20000000","volume":"1.29000000"},{"time":"2018-06-07T20:15:00+00:00","open":"7685.50000000","high":"7687.19000000","low":"7685.01000000","close":"7687.18000000","volume":"12.69583622"},{"time":"2018-06-07T20:14:00+00:00","open":"7688.08000000","high":"7689.72000000","low":"7685.50000000","close":"7685.50000000","volume":"5.35549306"},{"time":"2018-06-07T20:13:00+00:00","open":"7686.50000000","high":"7688.00000000","low":"7685.48000000","close":"7686.62000000","volume":"7.26663170"},{"time":"2018-06-07T20:12:00+00:00","open":"7689.28000000","high":"7689.28000000","low":"7686.21000000","close":"7686.51000000","volume":"1.41130000"},{"time":"2018-06-07T20:11:00+00:00","open":"7687.82000000","high":"7689.29000000","low":"7687.82000000","close":"7688.41000000","volume":"1.56770000"},{"time":"2018-06-07T20:10:00+00:00","open":"7689.99000000","high":"7689.99000000","low":"7684.09000000","close":"7687.81000000","volume":"3.43451895"},{"time":"2018-06-07T20:09:00+00:00","open":"7689.99000000","high":"7690.00000000","low":"7689.99000000","close":"7690.00000000","volume":"0.44540000"},{"time":"2018-06-07T20:08:00+00:00","open":"7690.00000000","high":"7690.00000000","low":"7689.99000000","close":"7689.99000000","volume":"0.27990000"},{"time":"2018-06-07T20:07:00+00:00","open":"7686.61000000","high":"7690.00000000","low":"7686.02000000","close":"7690.00000000","volume":"4.44140000"},{"time":"2018-06-07T20:06:00+00:00","open":"7686.63000000","high":"7688.79000000","low":"7683.43000000","close":"7686.01000000","volume":"2.83293031"},{"time":"2018-06-07T20:05:00+00:00","open":"7690.66000000","high":"7690.66000000","low":"7686.01000000","close":"7686.02000000","volume":"1.01101425"},{"time":"2018-06-07T20:04:00+00:00","open":"7691.41000000","high":"7691.41000000","low":"7687.59000000","close":"7690.66000000","volume":"5.96772250"},{"time":"2018-06-07T20:03:00+00:00","open":"7691.41000000","high":"7691.41000000","low":"7691.41000000","close":"7691.41000000","volume":"1.64858171"},{"time":"2018-06-07T20:02:00+00:00","open":"7689.01000000","high":"7691.41000000","low":"7689.01000000","close":"7691.40000000","volume":"6.06700000"},{"time":"2018-06-07T20:01:00+00:00","open":"7689.00000000","high":"7689.01000000","low":"7689.00000000","close":"7689.00000000","volume":"1.35995490"},{"time":"2018-06-07T20:00:00+00:00","open":"7690.00000000","high":"7692.26000000","low":"7689.04000000","close":"7692.25000000","volume":"0.37109299"},{"time":"2018-06-07T19:59:00+00:00","open":"7690.00000000","high":"7690.01000000","low":"7690.00000000","close":"7690.01000000","volume":"1.45964035"},{"time":"2018-06-07T19:58:00+00:00","open":"7689.99000000","high":"7690.00000000","low":"7689.99000000","close":"7690.00000000","volume":"0.26590000"},{"time":"2018-06-07T19:57:00+00:00","open":"7689.00000000","high":"7690.00000000","low":"7689.00000000","close":"7690.00000000","volume":"10.61732094"},{"time":"2018-06-07T19:56:00+00:00","open":"7690.00000000","high":"7690.00000000","low":"7689.00000000","close":"7689.99000000","volume":"7.56857509"},{"time":"2018-06-07T19:55:00+00:00","open":"7689.99000000","high":"7690.00000000","low":"7689.99000000","close":"7690.00000000","volume":"0.38560000"},{"time":"2018-06-07T19:54:00+00:00","open":"7689.99000000","high":"7690.00000000","low":"7689.99000000","close":"7689.99000000","volume":"0.81620351"},{"time":"2018-06-07T19:53:00+00:00","open":"7690.00000000","high":"7690.00000000","low":"7690.00000000","close":"7690.00000000","volume":"1.60704454"},{"time":"2018-06-07T19:52:00+00:00","open":"7690.00000000","high":"7690.00000000","low":"7689.99000000","close":"7690.00000000","volume":"0.68731506"},{"time":"2018-06-07T19:51:00+00:00","open":"7689.99000000","high":"7690.00000000","low":"7689.99000000","close":"7690.00000000","volume":"3.98905438"},{"time":"2018-06-07T19:50:00+00:00","open":"7689.99000000","high":"7690.00000000","low":"7689.99000000","close":"7689.99000000","volume":"0.33580000"},{"time":"2018-06-07T19:49:00+00:00","open":"7690.00000000","high":"7690.00000000","low":"7689.99000000","close":"7690.00000000","volume":"2.54553983"},{"time":"2018-06-07T19:48:00+00:00","open":"7688.81000000","high":"7690.00000000","low":"7686.02000000","close":"7690.00000000","volume":"2.74200000"},{"time":"2018-06-07T19:47:00+00:00","open":"7686.02000000","high":"7686.02000000","low":"7686.01000000","close":"7686.01000000","volume":"0.50110000"},{"time":"2018-06-07T19:46:00+00:00","open":"7686.01000000","high":"7686.02000000","low":"7686.01000000","close":"7686.02000000","volume":"1.19491936"},{"time":"2018-06-07T19:45:00+00:00","open":"7692.25000000","high":"7692.25000000","low":"7686.01000000","close":"7686.01000000","volume":"3.27579208"},{"time":"2018-06-07T19:44:00+00:00","open":"7692.25000000","high":"7692.25000000","low":"7692.25000000","close":"7692.25000000","volume":"1.46950000"},{"time":"2018-06-07T19:43:00+00:00","open":"7692.26000000","high":"7692.26000000","low":"7692.25000000","close":"7692.26000000","volume":"1.21026895"},{"time":"2018-06-07T19:42:00+00:00","open":"7692.26000000","high":"7692.26000000","low":"7692.25000000","close":"7692.26000000","volume":"1.45476548"},{"time":"2018-06-07T19:41:00+00:00","open":"7692.25000000","high":"7692.26000000","low":"7692.25000000","close":"7692.26000000","volume":"1.02746699"},{"time":"2018-06-07T19:40:00+00:00","open":"7692.25000000","high":"7692.26000000","low":"7692.25000000","close":"7692.25000000","volume":"0.52443564"},{"time":"2018-06-07T19:39:00+00:00","open":"7692.26000000","high":"7692.26000000","low":"7692.25000000","close":"7692.26000000","volume":"0.72859812"},{"time":"2018-06-07T19:38:00+00:00","open":"7692.25000000","high":"7692.26000000","low":"7692.25000000","close":"7692.25000000","volume":"0.39940000"},{"time":"2018-06-07T19:37:00+00:00","open":"7692.25000000","high":"7692.26000000","low":"7692.25000000","close":"7692.26000000","volume":"1.49686100"},{"time":"2018-06-07T19:36:00+00:00","open":"7692.26000000","high":"7692.26000000","low":"7692.25000000","close":"7692.26000000","volume":"0.94050955"},{"time":"2018-06-07T19:35:00+00:00","open":"7694.78000000","high":"7694.78000000","low":"7689.99000000","close":"7692.21000000","volume":"2.45474891"},{"time":"2018-06-07T19:34:00+00:00","open":"7685.00000000","high":"7694.79000000","low":"7685.00000000","close":"7690.94000000","volume":"99.82616867"},{"time":"2018-06-07T19:33:00+00:00","open":"7684.73000000","high":"7685.95000000","low":"7681.02000000","close":"7685.94000000","volume":"0.57499610"},{"time":"2018-06-07T19:32:00+00:00","open":"7684.74000000","high":"7684.74000000","low":"7684.73000000","close":"7684.74000000","volume":"0.28470000"},{"time":"2018-06-07T19:31:00+00:00","open":"7686.85000000","high":"7687.15000000","low":"7684.73000000","close":"7684.73000000","volume":"1.18658083"},{"time":"2018-06-07T19:30:00+00:00","open":"7684.73000000","high":"7684.74000000","low":"7684.73000000","close":"7684.73000000","volume":"0.64110000"},{"time":"2018-06-07T19:29:00+00:00","open":"7687.90000000","high":"7687.90000000","low":"7682.31000000","close":"7684.73000000","volume":"6.16479067"},{"time":"2018-06-07T19:28:00+00:00","open":"7691.06000000","high":"7691.10000000","low":"7687.90000000","close":"7687.91000000","volume":"1.49708513"},{"time":"2018-06-07T19:27:00+00:00","open":"7691.61000000","high":"7691.61000000","low":"7688.08000000","close":"7688.64000000","volume":"3.47950200"},{"time":"2018-06-07T19:26:00+00:00","open":"7693.08000000","high":"7693.08000000","low":"7692.00000000","close":"7692.00000000","volume":"2.07436678"},{"time":"2018-06-07T19:25:00+00:00","open":"7693.08000000","high":"7693.08000000","low":"7693.07000000","close":"7693.08000000","volume":"0.78574350"},{"time":"2018-06-07T19:24:00+00:00","open":"7693.08000000","high":"7693.08000000","low":"7693.08000000","close":"7693.08000000","volume":"0.79930000"},{"time":"2018-06-07T19:23:00+00:00","open":"7693.99000000","high":"7693.99000000","low":"7693.07000000","close":"7693.08000000","volume":"3.68611226"},{"time":"2018-06-07T19:22:00+00:00","open":"7693.99000000","high":"7694.00000000","low":"7693.99000000","close":"7694.00000000","volume":"0.36261598"},{"time":"2018-06-07T19:21:00+00:00","open":"7694.83000000","high":"7694.83000000","low":"7693.90000000","close":"7694.00000000","volume":"1.50177819"},{"time":"2018-06-07T19:20:00+00:00","open":"7697.71000000","high":"7697.75000000","low":"7694.82000000","close":"7695.01000000","volume":"0.65080000"},{"time":"2018-06-07T19:19:00+00:00","open":"7697.00000000","high":"7697.76000000","low":"7697.00000000","close":"7697.76000000","volume":"1.23062676"},{"time":"2018-06-07T19:18:00+00:00","open":"7696.01000000","high":"7697.00000000","low":"7694.79000000","close":"7696.99000000","volume":"1.74259064"},{"time":"2018-06-07T19:17:00+00:00","open":"7693.97000000","high":"7694.79000000","low":"7693.97000000","close":"7694.79000000","volume":"1.86490422"},{"time":"2018-06-07T19:16:00+00:00","open":"7693.97000000","high":"7693.98000000","low":"7693.97000000","close":"7693.98000000","volume":"0.61623957"}];
        disconnectBut = document.getElementById('disconnect');
                    //disconnectBut.onclick = closeWS;
var dataR = tickHistory;
//dataR = tickHistory;

         //document.getElementById('result').innerText += msg + '\n';
            console.log(dataR.length);
                      
                      //drawGraph(dataR);          
        var dim = {
                width: 960, height: 500,
                margin: { top: 20, right: 50, bottom: 30, left: 50 },
                ohlc: { height: 305 },
                indicator: { height: 65, padding: 5 }
            };
            dim.plot = {
                width: dim.width - dim.margin.left - dim.margin.right,
                height: dim.height - dim.margin.top - dim.margin.bottom
            };
            dim.indicator.top = dim.ohlc.height+dim.indicator.padding;
            dim.indicator.bottom = dim.indicator.top+dim.indicator.height+dim.indicator.padding;
            
            var indicatorTop = d3.scaleLinear()
                    .range([dim.indicator.top, dim.indicator.bottom]);
            
            var parseDate = d3.timeParse("%d-%b-%y");
            
            var zoom = d3.zoom()
                    .on("zoom", zoomed);
            
            var x = techan.scale.financetime()
                    .range([0, dim.plot.width]);
            
            var y = d3.scaleLinear()
                    .range([dim.ohlc.height, 0]);
            
            
            var yPercent = y.copy();   // Same as y at this stage, will get a different domain later
            
            var yInit, yPercentInit, zoomableInit;
            
            var yVolume = d3.scaleLinear()
                    .range([y(0), y(0.2)]);
            
            var candlestick = techan.plot.candlestick()
                    .xScale(x)
                    .yScale(y);
            
            var tradearrow = techan.plot.tradearrow()
                    .xScale(x)
                    .yScale(y)
                    .y(function(d) {
                        // Display the buy and sell arrows a bit above and below the price, so the price is still visible
                        if(d.type === 'buy') return y(d.low)+5;
                        if(d.type === 'sell') return y(d.high)-5;
                        else return y(d.price);
                    });
                    
                    var sma0 = techan.plot.sma()
                    .xScale(x)
                    .yScale(y);
            
            var sma1 = techan.plot.sma()
                    .xScale(x)
                    .yScale(y);
            
            var ema2 = techan.plot.ema()
                    .xScale(x)
                    .yScale(y);
            
            var volume = techan.plot.volume()
                    .accessor(candlestick.accessor())   // Set the accessor to a ohlc accessor so we get highlighted bars
                    .xScale(x)
                    .yScale(yVolume);
            
            var trendline = techan.plot.trendline()
                    .xScale(x)
                    .yScale(y);
            
            var supstance = techan.plot.supstance()
                    .xScale(x)
                    .yScale(y);
            
            var xAxis = d3.axisBottom(x);
            
            var timeAnnotation = techan.plot.axisannotation()
                    .axis(xAxis)
                    .orient('bottom')
                    .format(d3.timeFormat('%Y-%m-%d'))
                    .width(65)
                    .translate([0, dim.plot.height]);
            
            var yAxis = d3.axisRight(y);
            
            var ohlcAnnotation = techan.plot.axisannotation()
                    .axis(yAxis)
                    .orient('right')
                    .format(d3.format(',.2f'))
                    .translate([x(1), 0]);
            
            var closeAnnotation = techan.plot.axisannotation()
                    .axis(yAxis)
                    .orient('right')
                    .accessor(candlestick.accessor())
                    .format(d3.format(',.2f'))
                    .translate([x(1), 0]);
            
            var percentAxis = d3.axisLeft(yPercent)
                    .tickFormat(d3.format('+.1%'));
            
            var percentAnnotation = techan.plot.axisannotation()
                    .axis(percentAxis)
                    .orient('left');
            
            var volumeAxis = d3.axisRight(yVolume)
                    .ticks(3)
                    .tickFormat(d3.format(",.3s"));
            
            var volumeAnnotation = techan.plot.axisannotation()
                    .axis(volumeAxis)
                    .orient("right")
                    .width(35);
            
            var macdScale = d3.scaleLinear()
                    .range([indicatorTop(0)+dim.indicator.height, indicatorTop(0)]);
            
            var rsiScale = macdScale.copy()
                    .range([indicatorTop(1)+dim.indicator.height, indicatorTop(1)]);
            
            var macd = techan.plot.macd()
                    .xScale(x)
                    .yScale(macdScale);
            
            var macdAxis = d3.axisRight(macdScale)
                    .ticks(3);
            
            var macdAnnotation = techan.plot.axisannotation()
                    .axis(macdAxis)
                    .orient("right")
                    .format(d3.format(',.2f'))
                    .translate([x(1), 0]);
            
            var macdAxisLeft = d3.axisLeft(macdScale)
                    .ticks(3);
            
            var macdAnnotationLeft = techan.plot.axisannotation()
                    .axis(macdAxisLeft)
                    .orient("left")
                    .format(d3.format(',.2f'));
            
            var rsi = techan.plot.rsi()
                    .xScale(x)
                    .yScale(rsiScale);
            
            var rsiAxis = d3.axisRight(rsiScale)
                    .ticks(3);
            
            var rsiAnnotation = techan.plot.axisannotation()
                    .axis(rsiAxis)
                    .orient("right")
                    .format(d3.format(',.2f'))
                    .translate([x(1), 0]);
            
            var rsiAxisLeft = d3.axisLeft(rsiScale)
                    .ticks(3);
            
            var rsiAnnotationLeft = techan.plot.axisannotation()
                    .axis(rsiAxisLeft)
                    .orient("left")
                    .format(d3.format(',.2f'));
            
            var ohlcCrosshair = techan.plot.crosshair()
                    .xScale(timeAnnotation.axis().scale())
                    .yScale(ohlcAnnotation.axis().scale())
                    .xAnnotation(timeAnnotation)
                    .yAnnotation([ohlcAnnotation, percentAnnotation, volumeAnnotation])
                    .verticalWireRange([0, dim.plot.height]);
            
            var macdCrosshair = techan.plot.crosshair()
                    .xScale(timeAnnotation.axis().scale())
                    .yScale(macdAnnotation.axis().scale())
                    .xAnnotation(timeAnnotation)
                    .yAnnotation([macdAnnotation, macdAnnotationLeft])
                    .verticalWireRange([0, dim.plot.height]);
            
            var rsiCrosshair = techan.plot.crosshair()
                    .xScale(timeAnnotation.axis().scale())
                    .yScale(rsiAnnotation.axis().scale())
                    .xAnnotation(timeAnnotation)
                    .yAnnotation([rsiAnnotation, rsiAnnotationLeft])
                    .verticalWireRange([0, dim.plot.height]);
            
            var svg = d3.select("body").append("svg")
                    .attr("width", dim.width)
                    .attr("height", dim.height);
            
            var defs = svg.append("defs");
            
            defs.append("clipPath")
                .attr("id", "ohlcClip")
            .append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", dim.plot.width)
                .attr("height", dim.ohlc.height);
            
            defs.selectAll("indicatorClip").data([0, 1])
            .enter()
                .append("clipPath")
                .attr("id", function(d, i) { return "indicatorClip-" + i; })
            .append("rect")
                .attr("x", 0)
                .attr("y", function(d, i) { return indicatorTop(i); })
                .attr("width", dim.plot.width)
                .attr("height", dim.indicator.height);
            
            svg = svg.append("g")
                .attr("transform", "translate(" + dim.margin.left + "," + dim.margin.top + ")");
            
                //X-Axis Top Title
            svg.append('text')
                .attr("class", "symbol")
                .attr("x", 20)
                .text("Zolo Trader");
            
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + dim.plot.height + ")");
            
            var ohlcSelection = svg.append("g")
                .attr("class", "ohlc")
                .attr("transform", "translate(0,0)");
            
                
            ohlcSelection.append("g")
                .attr("class", "axis")
                .attr("transform", "translate(" + x(1) + ",0)")
                .append("text") //Controls the y-axis title
                .attr("transform", "rotate(-90)")
                .attr("y", -15)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("BTCUSD");
            
            ohlcSelection.append("g")
                .attr("class", "close annotation up");
            
            ohlcSelection.append("g")
                .attr("class", "volume")
                .attr("clip-path", "url(#ohlcClip)");
            
            ohlcSelection.append("g")
                .attr("class", "candlestick")
                .attr("clip-path", "url(#ohlcClip)");
            
            ohlcSelection.append("g")
                .attr("class", "indicator sma ma-0")
                .attr("clip-path", "url(#ohlcClip)");
            
            ohlcSelection.append("g")
                .attr("class", "indicator sma ma-1")
                .attr("clip-path", "url(#ohlcClip)");
            
            ohlcSelection.append("g")
                .attr("class", "indicator ema ma-2")
                .attr("clip-path", "url(#ohlcClip)");
            
            ohlcSelection.append("g")
                .attr("class", "percent axis");
            
            ohlcSelection.append("g")
                .attr("class", "volume axis");
            
            var indicatorSelection = svg.selectAll("svg > g.indicator").data(["macd", "rsi"]).enter()
                 .append("g")
                    .attr("class", function(d) { return d + " indicator"; });
            
            indicatorSelection.append("g")
                .attr("class", "axis right")
                .attr("transform", "translate(" + x(1) + ",0)");
            
            indicatorSelection.append("g")
                .attr("class", "axis left")
                .attr("transform", "translate(" + x(0) + ",0)");
            
            indicatorSelection.append("g")
                .attr("class", "indicator-plot")
                .attr("clip-path", function(d, i) { return "url(#indicatorClip-" + i + ")"; });
            
            // Add trendlines and other interactions last to be above zoom pane
            svg.append('g')
                .attr("class", "crosshair ohlc");
            
            svg.append("g")
                .attr("class", "tradearrow")
                .attr("clip-path", "url(#ohlcClip)");
            
            svg.append('g')
                .attr("class", "crosshair macd");
            
            svg.append('g')
                .attr("class", "crosshair rsi");
            
            svg.append("g")
                .attr("class", "trendlines analysis")
                .attr("clip-path", "url(#ohlcClip)");
            svg.append("g")
                .attr("class", "supstances analysis")
        .attr("clip-path", "url(#ohlcClip)");
                
    //Call function to display the graph                
getDraw();

// draw graph after successful collection of data
function getDraw() {
        axios.get('https://feed.cryptoquote.io/bars/minutes/1/btcusd.gdax.internal/now').then(res => {
                console.log(res.data)
                dataR = (res.data.bars.bars);
                
                //Start D3 config with fetch data

        //Configuration for drawing of the graph
        var accessor = candlestick.accessor();
        var indicatorPreRoll = 60;
        var datObj = [];
        // Map function to iterate through the data collected
        data = dataR.map(function (d) {
                 
                        return {
                                date: new Date(d.time),
                                open: +d.open,
                                high: +d.high,
                                low: +d.low,
                                close: +d.close,
                                volume: +d.volume,
                                                        
                        };
        }).sort(function (a, b) { return d3.ascending(accessor.d(a), accessor.d(b)); });
          
        //Set the scale range for X and Y domain
        x.domain(techan.scale.plot.time(data).domain());
        y.domain(techan.scale.plot.ohlc(data.slice(indicatorPreRoll)).domain());
        yPercent.domain(techan.scale.plot.percent(y, accessor(data[indicatorPreRoll])).domain());

        //
        /*   var trendlineData = [
          { start: { date: new Date(2018, 6, 04), value: 7201.50 }, end: { date: new Date(2018, 6, 04), value: 7100.34 } },
          { start: { date: new Date(2018, 6, 04), value: 7000 }, end: { date: new Date(2018, 6, 04), value: 7000.50 } }
      ];
  
      var supstanceData = [
          { start: new Date(2014, 2, 11), end: new Date(2014, 5, 9), value: 63.64 },
          { start: new Date(2013, 10, 21), end: new Date(2014, 2, 17), value: 55.50 }
      ]; */

        // Create a button to automatically add these data to the trade variable
        //so as to display the trade arrow 
        var trades = [
                { date: data[67].date, type: "buy", price: data[67].low, low: data[67].low, high: data[67].high },
                { date: data[100].date, type: "sell", price: data[100].high, low: data[100].low, high: data[100].high },
                { date: data[130].date, type: "buy", price: data[130].low, low: data[130].low, high: data[130].high },
                { date: data[170].date, type: "sell", price: data[170].low, low: data[170].low, high: data[170].high }
        ];

        var macdData = techan.indicator.macd()(data);
        macdScale.domain(techan.scale.plot.macd(macdData).domain());
        var rsiData = techan.indicator.rsi()(data);
        rsiScale.domain(techan.scale.plot.rsi(rsiData).domain());


        svg.select("g.candlestick").datum(data).call(candlestick);
        svg.select("g.close.annotation").datum([data[data.length - 1]]).call(closeAnnotation);
        svg.select("g.volume").datum(data).call(volume);
        svg.select("g.sma.ma-0").datum(techan.indicator.sma().period(10)(data)).call(sma0);
        svg.select("g.sma.ma-1").datum(techan.indicator.sma().period(20)(data)).call(sma1);
        svg.select("g.ema.ma-2").datum(techan.indicator.ema().period(50)(data)).call(ema2);
        svg.select("g.macd .indicator-plot").datum(macdData).call(macd);
        svg.select("g.rsi .indicator-plot").datum(rsiData).call(rsi);

        svg.select("g.crosshair.ohlc").call(ohlcCrosshair).call(zoom);
        svg.select("g.crosshair.macd").call(macdCrosshair).call(zoom);
        svg.select("g.crosshair.rsi").call(rsiCrosshair).call(zoom);
        // svg.select("g.trendlines").datum(trendlineData).call(trendline).call(trendline.drag);
        // svg.select("g.supstances").datum(supstanceData).call(supstance).call(supstance.drag);

        svg.select("g.tradearrow").datum(trades).call(tradearrow);

        // Stash for zooming
        zoomableInit = x.zoomable().domain([indicatorPreRoll, data.length]).copy(); // Zoom in a little to hide indicator preroll
        yInit = y.copy();
        yPercentInit = yPercent.copy();

        //function call to display the data on a graph
        draw();

        // Data to display initially
        zoomableInit = x.zoomable().domain([indicatorPreRoll, data.length]).copy(); // Zoom in a little to hide indicator preroll
        yInit = y.copy();
        yPercentInit = yPercent.copy();

        
                //End to the config and display graph

        }).catch(err => console.error(err.message));
}       
  //Function to zoom in or out
  function zoomed() {
        x.zoomable().domain(d3.event.transform.rescaleX(zoomableInit).domain());
        y.domain(d3.event.transform.rescaleY(yInit).domain());
        yPercent.domain(d3.event.transform.rescaleY(yPercentInit).domain());

        //After zooming redraw the graph    
        draw();
}

//Drawing or displaying the data function
function draw() {
        svg.select("g.x.axis").call(xAxis);
        svg.select("g.ohlc .axis").call(yAxis);
        svg.select("g.volume.axis").call(volumeAxis);
        svg.select("g.percent.axis").call(percentAxis);
        svg.select("g.macd .axis.right").call(macdAxis);
        svg.select("g.rsi .axis.right").call(rsiAxis);
        svg.select("g.macd .axis.left").call(macdAxisLeft);
        svg.select("g.rsi .axis.left").call(rsiAxisLeft);

        // We know the data does not change, a simple refresh that does not perform data joins will suffice.
        svg.select("g.candlestick").call(candlestick.refresh);
        svg.select("g.close.annotation").call(closeAnnotation.refresh);
        svg.select("g.volume").call(volume.refresh);
        svg.select("g .sma.ma-0").call(sma0.refresh);
        svg.select("g .sma.ma-1").call(sma1.refresh);
        svg.select("g .ema.ma-2").call(ema2.refresh);
        svg.select("g.macd .indicator-plot").call(macd.refresh);
        svg.select("g.rsi .indicator-plot").call(rsi.refresh);
        svg.select("g.crosshair.ohlc").call(ohlcCrosshair.refresh);
        svg.select("g.crosshair.macd").call(macdCrosshair.refresh);
        svg.select("g.crosshair.rsi").call(rsiCrosshair.refresh);
        // svg.select("g.trendlines").call(trendline.refresh);
        // svg.select("g.supstances").call(supstance.refresh);
        svg.select("g.tradearrow").call(tradearrow.refresh);
}   

//Interval timer of 60secs/1min to redraw the graw on the screen
const startDrawing = setInterval(getDraw, 60000); 
