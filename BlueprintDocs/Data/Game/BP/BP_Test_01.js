(function(){window.__BP_DATA__=window.__BP_DATA__||{};window.__BP_DATA__["BP_Test_01"]={
	"schema_version": "1.0",
	"data":
	{
		"name": "BP_Test_01",
		"path": "/Game/BP/BP_Test_01.BP_Test_01",
		"parentClass": "Actor",
		"parentClassPath": "/Script/Engine.Actor",
		"parentIsNative": true,
		"variables": [],
		"functions": [
			{
				"name": "SomeOtherOneMethod",
				"returnType": "int32",
				"public": true,
				"isInterfaceFunction": false,
				"parameters": [
					"ShouldMultiple: bool",
					"MyInt: int"
				],
				"isNative": false,
				"isEvent": false,
				"complexityScore": 2,
				"localVariables": []
			},
			{
				"name": "someUnusedMethod",
				"returnType": "int32",
				"public": true,
				"isInterfaceFunction": false,
				"parameters": [
					"myInt: int"
				],
				"isNative": false,
				"isEvent": false,
				"complexityScore": 1,
				"localVariables": []
			},
			{
				"name": "ReceiveBeginPlay",
				"returnType": "void",
				"public": false,
				"isInterfaceFunction": false,
				"parameters": [],
				"isNative": false,
				"isEvent": true,
				"complexityScore": 1,
				"localVariables": []
			},
			{
				"name": "unusedEvent",
				"returnType": "void",
				"public": true,
				"isInterfaceFunction": false,
				"parameters": [],
				"isNative": false,
				"isEvent": true,
				"complexityScore": 1,
				"localVariables": []
			},
			{
				"name": "SomeOtherUsedEvent",
				"returnType": "void",
				"public": true,
				"isInterfaceFunction": false,
				"parameters": [],
				"isNative": false,
				"isEvent": true,
				"complexityScore": 1,
				"localVariables": []
			}
		],
		"components": [
			{
				"name": "SCS_Components",
				"type": "SimpleConstructionScript",
				"parent": "Root"
			}
		],
		"graphs": [
			{
				"name": "EventGraph",
				"type": "EventGraph",
				"nodeCount": 14,
				"nodes": [
					{
						"guid": "98BB672D4106F8E4090D57A223D6DE22",
						"type": "K2Node_Event",
						"title": "Event BeginPlay",
						"executionOrder": 0,
						"isEnabled": true,
						"isEngineEvent": true,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "event",
							"operation": "trigger",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "Event BeginPlay",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "OutputDelegate",
								"type": "delegate",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"74CEDEC54BEDC01FB760639BCEEC7278.execute"
								]
							}
						]
					},
					{
						"guid": "12FC1DB5423533D917A852A52B16F78F",
						"type": "K2Node_Event",
						"title": "Event ActorBeginOverlap",
						"executionOrder": -1,
						"isEnabled": false,
						"isEngineEvent": true,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "OutputDelegate",
								"type": "delegate",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "OtherActor",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "608CE79E4E17F474EA3DD4B4F00CA658",
						"type": "K2Node_Event",
						"title": "Event Tick",
						"executionOrder": -1,
						"isEnabled": false,
						"isEngineEvent": true,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "OutputDelegate",
								"type": "delegate",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "DeltaSeconds",
								"type": "real",
								"direction": "Output",
								"default": "0.0",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "A2F09B424EC6C8E085F93A941733C925",
						"type": "K2Node_CustomEvent",
						"title": "unusedEvent",
						"executionOrder": 3,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "event",
							"operation": "trigger",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "unusedEvent",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "OutputDelegate",
								"type": "delegate",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3DF9931B4A222647BF16C884FC8847E0.execute"
								]
							}
						]
					},
					{
						"guid": "3DF9931B4A222647BF16C884FC8847E0",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 4,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: Hello",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"A2F09B424EC6C8E085F93A941733C925.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"EA938E73462CAA94470D6081DAEBD638.execute"
								]
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "2A636566463944F68499289921691FC7",
						"type": "K2Node_CustomEvent",
						"title": "SomeOtherUsedEvent",
						"executionOrder": 7,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "event",
							"operation": "trigger",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "SomeOtherUsedEvent",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "OutputDelegate",
								"type": "delegate",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"2DD858304B6299BC0DDB0290CAD54340.execute"
								]
							}
						]
					},
					{
						"guid": "2DD858304B6299BC0DDB0290CAD54340",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 8,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: Hello",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"2A636566463944F68499289921691FC7.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "74CEDEC54BEDC01FB760639BCEEC7278",
						"type": "K2Node_CallFunction",
						"title": "Some Other One Method",
						"executionOrder": 1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "SomeOtherOneMethod",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"ShouldMultiple: false",
								"MyInt: 77"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"98BB672D4106F8E4090D57A223D6DE22.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"9083C5784A23D87E6F68878DDF7C9CF4.execute"
								]
							},
							{
								"name": "ShouldMultiple",
								"type": "bool",
								"direction": "Input",
								"default": "false",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "MyInt",
								"type": "int",
								"direction": "Input",
								"default": "77",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "ReturnValue",
								"type": "int",
								"direction": "Output",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"9FFB91554983CE10141B87A5A37AE9A3.InInt"
								]
							}
						]
					},
					{
						"guid": "9083C5784A23D87E6F68878DDF7C9CF4",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 2,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: Conv_IntToString()",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"74CEDEC54BEDC01FB760639BCEEC7278.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"9FFB91554983CE10141B87A5A37AE9A3.ReturnValue"
								]
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "9FFB91554983CE10141B87A5A37AE9A3",
						"type": "K2Node_CallFunction",
						"title": "To String (Integer)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "InInt",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"74CEDEC54BEDC01FB760639BCEEC7278.ReturnValue"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"9083C5784A23D87E6F68878DDF7C9CF4.InString"
								]
							}
						]
					},
					{
						"guid": "EA938E73462CAA94470D6081DAEBD638",
						"type": "K2Node_CreateWidget",
						"title": "Create Widget",
						"executionOrder": 5,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3DF9931B4A222647BF16C884FC8847E0.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"18607BBC43B3DE61FC565A82811D6FC9.execute"
								]
							},
							{
								"name": "Class",
								"type": "class",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "ReturnValue",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"18607BBC43B3DE61FC565A82811D6FC9.self"
								]
							},
							{
								"name": "OwningPlayer",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "18607BBC43B3DE61FC565A82811D6FC9",
						"type": "K2Node_CallFunction",
						"title": "Add to Viewport",
						"executionOrder": 6,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "AddToViewport",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"self: AddToViewport()",
								"ZOrder: 0"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"EA938E73462CAA94470D6081DAEBD638.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"EA938E73462CAA94470D6081DAEBD638.ReturnValue"
								]
							},
							{
								"name": "ZOrder",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "DFE7E569432A3876F9C898A1E1DCDCFB",
						"type": "K2Node_CustomEvent",
						"title": "SomeDisabledEvent",
						"executionOrder": -1,
						"isEnabled": false,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "OutputDelegate",
								"type": "delegate",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"529E3BAA4EE64EFB49567691DDAF6225.execute"
								]
							}
						]
					},
					{
						"guid": "529E3BAA4EE64EFB49567691DDAF6225",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"DFE7E569432A3876F9C898A1E1DCDCFB.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					}
				],
				"entryNodes": [
					"98BB672D4106F8E4090D57A223D6DE22",
					"A2F09B424EC6C8E085F93A941733C925",
					"2A636566463944F68499289921691FC7"
				],
				"executionEdges": [
					{
						"fromNodeGuid": "98BB672D4106F8E4090D57A223D6DE22",
						"toNodeGuid": "74CEDEC54BEDC01FB760639BCEEC7278",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "74CEDEC54BEDC01FB760639BCEEC7278",
						"toNodeGuid": "9083C5784A23D87E6F68878DDF7C9CF4",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "A2F09B424EC6C8E085F93A941733C925",
						"toNodeGuid": "3DF9931B4A222647BF16C884FC8847E0",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "3DF9931B4A222647BF16C884FC8847E0",
						"toNodeGuid": "EA938E73462CAA94470D6081DAEBD638",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "EA938E73462CAA94470D6081DAEBD638",
						"toNodeGuid": "18607BBC43B3DE61FC565A82811D6FC9",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "2A636566463944F68499289921691FC7",
						"toNodeGuid": "2DD858304B6299BC0DDB0290CAD54340",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "DFE7E569432A3876F9C898A1E1DCDCFB",
						"toNodeGuid": "529E3BAA4EE64EFB49567691DDAF6225",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					}
				],
				"dataEdges": [
					{
						"fromNodeGuid": "9FFB91554983CE10141B87A5A37AE9A3",
						"toNodeGuid": "9083C5784A23D87E6F68878DDF7C9CF4",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "74CEDEC54BEDC01FB760639BCEEC7278",
						"toNodeGuid": "9FFB91554983CE10141B87A5A37AE9A3",
						"fromPin": "ReturnValue",
						"toPin": "InInt",
						"dataType": "int",
						"value": "Conv_IntToString()"
					},
					{
						"fromNodeGuid": "EA938E73462CAA94470D6081DAEBD638",
						"toNodeGuid": "18607BBC43B3DE61FC565A82811D6FC9",
						"fromPin": "ReturnValue",
						"toPin": "self",
						"dataType": "object",
						"value": "AddToViewport()"
					}
				],
				"deadCodeNodes": [
					"DFE7E569432A3876F9C898A1E1DCDCFB",
					"529E3BAA4EE64EFB49567691DDAF6225"
				]
			},
			{
				"name": "UserConstructionScript",
				"type": "FunctionGraph",
				"nodeCount": 1,
				"nodes": [
					{
						"guid": "FF2E56F14A3A2AF419158A8F876ECC92",
						"type": "K2Node_FunctionEntry",
						"title": "Construction Script",
						"executionOrder": 9,
						"isEnabled": true,
						"isEngineEvent": true,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					}
				],
				"entryNodes": [
					"FF2E56F14A3A2AF419158A8F876ECC92"
				],
				"executionEdges": [],
				"dataEdges": [],
				"deadCodeNodes": []
			},
			{
				"name": "someUnusedMethod",
				"type": "FunctionGraph",
				"nodeCount": 3,
				"nodes": [
					{
						"guid": "1B526714407F4A7B42C8FE88A7D0352E",
						"type": "K2Node_FunctionEntry",
						"title": "Some Unused Method",
						"executionOrder": 10,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"32DBF3324D29D64A0DEBE18210CE1E22.execute"
								]
							},
							{
								"name": "myInt",
								"type": "int",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"348D516E499D937A615ACDB83DFBA957.A"
								]
							}
						]
					},
					{
						"guid": "348D516E499D937A615ACDB83DFBA957",
						"type": "K2Node_PromotableOperator",
						"title": "int * int",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "A",
								"type": "int",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"1B526714407F4A7B42C8FE88A7D0352E.myInt"
								]
							},
							{
								"name": "B",
								"type": "int",
								"direction": "Input",
								"default": "5",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "ReturnValue",
								"type": "int",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"32DBF3324D29D64A0DEBE18210CE1E22.ReturnValue"
								]
							}
						]
					},
					{
						"guid": "32DBF3324D29D64A0DEBE18210CE1E22",
						"type": "K2Node_FunctionResult",
						"title": "Return Node",
						"executionOrder": 11,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"1B526714407F4A7B42C8FE88A7D0352E.then"
								]
							},
							{
								"name": "ReturnValue",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"348D516E499D937A615ACDB83DFBA957.ReturnValue"
								]
							}
						]
					}
				],
				"entryNodes": [
					"1B526714407F4A7B42C8FE88A7D0352E"
				],
				"executionEdges": [
					{
						"fromNodeGuid": "1B526714407F4A7B42C8FE88A7D0352E",
						"toNodeGuid": "32DBF3324D29D64A0DEBE18210CE1E22",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					}
				],
				"dataEdges": [
					{
						"fromNodeGuid": "1B526714407F4A7B42C8FE88A7D0352E",
						"toNodeGuid": "348D516E499D937A615ACDB83DFBA957",
						"fromPin": "myInt",
						"toPin": "A",
						"dataType": "int",
						"value": "Multiply_IntInt()"
					},
					{
						"fromNodeGuid": "348D516E499D937A615ACDB83DFBA957",
						"toNodeGuid": "32DBF3324D29D64A0DEBE18210CE1E22",
						"fromPin": "ReturnValue",
						"toPin": "ReturnValue",
						"dataType": "int",
						"value": "Multiply_IntInt()"
					}
				],
				"deadCodeNodes": []
			},
			{
				"name": "SomeOtherOneMethod",
				"type": "FunctionGraph",
				"nodeCount": 5,
				"nodes": [
					{
						"guid": "1B526714407F4A7B42C8FE88A7D0352E",
						"type": "K2Node_FunctionEntry",
						"title": "Some Other One Method",
						"executionOrder": 12,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"7814E24C400934F4A78DDAB511EDF62E.execute"
								]
							},
							{
								"name": "ShouldMultiple",
								"type": "bool",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"7814E24C400934F4A78DDAB511EDF62E.Condition"
								]
							},
							{
								"name": "MyInt",
								"type": "int",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"FD6F0FC64E0149F068811385B939873A.A",
									"338F826E4D08161A545AFDA206980ECE.ReturnValue"
								]
							}
						]
					},
					{
						"guid": "32DBF3324D29D64A0DEBE18210CE1E22",
						"type": "K2Node_FunctionResult",
						"title": "Return Node",
						"executionOrder": 15,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"7814E24C400934F4A78DDAB511EDF62E.then"
								]
							},
							{
								"name": "ReturnValue",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"FD6F0FC64E0149F068811385B939873A.ReturnValue"
								]
							}
						]
					},
					{
						"guid": "7814E24C400934F4A78DDAB511EDF62E",
						"type": "K2Node_IfThenElse",
						"title": "Branch",
						"executionOrder": 13,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "branch",
							"operation": "if",
							"conditionExpression": "Some Other One Method",
							"variableName": "",
							"functionName": "",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"1B526714407F4A7B42C8FE88A7D0352E.then"
								]
							},
							{
								"name": "Condition",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": [
									"1B526714407F4A7B42C8FE88A7D0352E.ShouldMultiple"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"32DBF3324D29D64A0DEBE18210CE1E22.execute"
								]
							},
							{
								"name": "else",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"338F826E4D08161A545AFDA206980ECE.execute"
								]
							}
						]
					},
					{
						"guid": "FD6F0FC64E0149F068811385B939873A",
						"type": "K2Node_PromotableOperator",
						"title": "int * int",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "A",
								"type": "int",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"1B526714407F4A7B42C8FE88A7D0352E.MyInt"
								]
							},
							{
								"name": "B",
								"type": "int",
								"direction": "Input",
								"default": "8",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "ReturnValue",
								"type": "int",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"32DBF3324D29D64A0DEBE18210CE1E22.ReturnValue"
								]
							}
						]
					},
					{
						"guid": "338F826E4D08161A545AFDA206980ECE",
						"type": "K2Node_FunctionResult",
						"title": "Return Node",
						"executionOrder": 14,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"7814E24C400934F4A78DDAB511EDF62E.else"
								]
							},
							{
								"name": "ReturnValue",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"1B526714407F4A7B42C8FE88A7D0352E.MyInt"
								]
							}
						]
					}
				],
				"entryNodes": [
					"1B526714407F4A7B42C8FE88A7D0352E"
				],
				"executionEdges": [
					{
						"fromNodeGuid": "1B526714407F4A7B42C8FE88A7D0352E",
						"toNodeGuid": "7814E24C400934F4A78DDAB511EDF62E",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "7814E24C400934F4A78DDAB511EDF62E",
						"toNodeGuid": "338F826E4D08161A545AFDA206980ECE",
						"fromPin": "else",
						"toPin": "execute",
						"edgeType": "branch_false"
					},
					{
						"fromNodeGuid": "7814E24C400934F4A78DDAB511EDF62E",
						"toNodeGuid": "32DBF3324D29D64A0DEBE18210CE1E22",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "branch_true"
					}
				],
				"dataEdges": [
					{
						"fromNodeGuid": "FD6F0FC64E0149F068811385B939873A",
						"toNodeGuid": "32DBF3324D29D64A0DEBE18210CE1E22",
						"fromPin": "ReturnValue",
						"toPin": "ReturnValue",
						"dataType": "int",
						"value": "Multiply_IntInt()"
					},
					{
						"fromNodeGuid": "1B526714407F4A7B42C8FE88A7D0352E",
						"toNodeGuid": "7814E24C400934F4A78DDAB511EDF62E",
						"fromPin": "ShouldMultiple",
						"toPin": "Condition",
						"dataType": "bool",
						"value": "circular_ref"
					},
					{
						"fromNodeGuid": "1B526714407F4A7B42C8FE88A7D0352E",
						"toNodeGuid": "FD6F0FC64E0149F068811385B939873A",
						"fromPin": "MyInt",
						"toPin": "A",
						"dataType": "int",
						"value": "Multiply_IntInt()"
					},
					{
						"fromNodeGuid": "1B526714407F4A7B42C8FE88A7D0352E",
						"toNodeGuid": "338F826E4D08161A545AFDA206980ECE",
						"fromPin": "MyInt",
						"toPin": "ReturnValue",
						"dataType": "int",
						"value": "Multiply_IntInt()"
					}
				],
				"deadCodeNodes": []
			}
		],
		"interfaces": [],
		"interfaceCalls": [],
		"dispatchers": [],
		"executionEdges": [
			{
				"fromNodeGuid": "98BB672D4106F8E4090D57A223D6DE22",
				"toNodeGuid": "74CEDEC54BEDC01FB760639BCEEC7278",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "74CEDEC54BEDC01FB760639BCEEC7278",
				"toNodeGuid": "9083C5784A23D87E6F68878DDF7C9CF4",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "A2F09B424EC6C8E085F93A941733C925",
				"toNodeGuid": "3DF9931B4A222647BF16C884FC8847E0",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "3DF9931B4A222647BF16C884FC8847E0",
				"toNodeGuid": "EA938E73462CAA94470D6081DAEBD638",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "EA938E73462CAA94470D6081DAEBD638",
				"toNodeGuid": "18607BBC43B3DE61FC565A82811D6FC9",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "2A636566463944F68499289921691FC7",
				"toNodeGuid": "2DD858304B6299BC0DDB0290CAD54340",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "DFE7E569432A3876F9C898A1E1DCDCFB",
				"toNodeGuid": "529E3BAA4EE64EFB49567691DDAF6225",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "1B526714407F4A7B42C8FE88A7D0352E",
				"toNodeGuid": "32DBF3324D29D64A0DEBE18210CE1E22",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "1B526714407F4A7B42C8FE88A7D0352E",
				"toNodeGuid": "7814E24C400934F4A78DDAB511EDF62E",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "7814E24C400934F4A78DDAB511EDF62E",
				"toNodeGuid": "338F826E4D08161A545AFDA206980ECE",
				"fromPin": "else",
				"toPin": "execute",
				"edgeType": "branch_false"
			},
			{
				"fromNodeGuid": "7814E24C400934F4A78DDAB511EDF62E",
				"toNodeGuid": "32DBF3324D29D64A0DEBE18210CE1E22",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "branch_true"
			}
		],
		"dataEdges": [
			{
				"fromNodeGuid": "9FFB91554983CE10141B87A5A37AE9A3",
				"toNodeGuid": "9083C5784A23D87E6F68878DDF7C9CF4",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "74CEDEC54BEDC01FB760639BCEEC7278",
				"toNodeGuid": "9FFB91554983CE10141B87A5A37AE9A3",
				"fromPin": "ReturnValue",
				"toPin": "InInt",
				"dataType": "int",
				"value": "Conv_IntToString()"
			},
			{
				"fromNodeGuid": "EA938E73462CAA94470D6081DAEBD638",
				"toNodeGuid": "18607BBC43B3DE61FC565A82811D6FC9",
				"fromPin": "ReturnValue",
				"toPin": "self",
				"dataType": "object",
				"value": "AddToViewport()"
			},
			{
				"fromNodeGuid": "1B526714407F4A7B42C8FE88A7D0352E",
				"toNodeGuid": "348D516E499D937A615ACDB83DFBA957",
				"fromPin": "myInt",
				"toPin": "A",
				"dataType": "int",
				"value": "Multiply_IntInt()"
			},
			{
				"fromNodeGuid": "348D516E499D937A615ACDB83DFBA957",
				"toNodeGuid": "32DBF3324D29D64A0DEBE18210CE1E22",
				"fromPin": "ReturnValue",
				"toPin": "ReturnValue",
				"dataType": "int",
				"value": "Multiply_IntInt()"
			},
			{
				"fromNodeGuid": "FD6F0FC64E0149F068811385B939873A",
				"toNodeGuid": "32DBF3324D29D64A0DEBE18210CE1E22",
				"fromPin": "ReturnValue",
				"toPin": "ReturnValue",
				"dataType": "int",
				"value": "Multiply_IntInt()"
			},
			{
				"fromNodeGuid": "1B526714407F4A7B42C8FE88A7D0352E",
				"toNodeGuid": "7814E24C400934F4A78DDAB511EDF62E",
				"fromPin": "ShouldMultiple",
				"toPin": "Condition",
				"dataType": "bool",
				"value": "circular_ref"
			},
			{
				"fromNodeGuid": "1B526714407F4A7B42C8FE88A7D0352E",
				"toNodeGuid": "FD6F0FC64E0149F068811385B939873A",
				"fromPin": "MyInt",
				"toPin": "A",
				"dataType": "int",
				"value": "Multiply_IntInt()"
			},
			{
				"fromNodeGuid": "1B526714407F4A7B42C8FE88A7D0352E",
				"toNodeGuid": "338F826E4D08161A545AFDA206980ECE",
				"fromPin": "MyInt",
				"toPin": "ReturnValue",
				"dataType": "int",
				"value": "Multiply_IntInt()"
			}
		],
		"variableUsages": [],
		"functionCalls": [
			{
				"nodeGuid": "3DF9931B4A222647BF16C884FC8847E0",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 4,
				"arguments": [
					"InString: Hello",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "2DD858304B6299BC0DDB0290CAD54340",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 8,
				"arguments": [
					"InString: Hello",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "74CEDEC54BEDC01FB760639BCEEC7278",
				"graphName": "EventGraph",
				"functionName": "SomeOtherOneMethod",
				"returnValue": "used",
				"executionOrder": 1,
				"arguments": [
					"ShouldMultiple: false",
					"MyInt: 77"
				]
			},
			{
				"nodeGuid": "9083C5784A23D87E6F68878DDF7C9CF4",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 2,
				"arguments": [
					"InString: Conv_IntToString()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "9FFB91554983CE10141B87A5A37AE9A3",
				"graphName": "EventGraph",
				"functionName": "Conv_IntToString",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"InInt: SomeOtherOneMethod()"
				]
			},
			{
				"nodeGuid": "18607BBC43B3DE61FC565A82811D6FC9",
				"graphName": "EventGraph",
				"functionName": "AddToViewport",
				"returnValue": "",
				"executionOrder": 6,
				"arguments": [
					"self: AddToViewport()",
					"ZOrder: 0"
				]
			},
			{
				"nodeGuid": "529E3BAA4EE64EFB49567691DDAF6225",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 0,
				"arguments": [
					"InString: Hello",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "348D516E499D937A615ACDB83DFBA957",
				"graphName": "someUnusedMethod",
				"functionName": "Multiply_IntInt",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"A: Multiply_IntInt()",
					"B: 5"
				]
			},
			{
				"nodeGuid": "FD6F0FC64E0149F068811385B939873A",
				"graphName": "SomeOtherOneMethod",
				"functionName": "Multiply_IntInt",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"A: Multiply_IntInt()",
					"B: 8"
				]
			}
		],
		"referencedBlueprints": [],
		"diagnostics": [],
		"deadCodeNodes": [
			"DFE7E569432A3876F9C898A1E1DCDCFB",
			"529E3BAA4EE64EFB49567691DDAF6225"
		],
		"totalExecutionPaths": 11,
		"maxExecutionDepth": 3
	},
	"issues": [
		{
			"level": "error",
			"type": "Dead Code",
			"desc": "'EventGraph': 2 unreachable — SomeDisabledEvent, Print String",
			"rule_id": "BP-DEAD-001"
		},
		{
			"level": "warning",
			"type": "Disabled Nodes",
			"desc": "Found 1 disabled event nodes: SomeDisabledEvent",
			"rule_id": "BP-STYLE-001"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Function 'someUnusedMethod' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-002"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Function 'unusedEvent' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-002"
		},
		{
			"level": "warning",
			"type": "Event Naming",
			"desc": "Event 'unusedEvent' does not start with an uppercase letter.",
			"rule_id": "BP-NAMING-009"
		},
		{
			"level": "warning",
			"type": "Empty Tick",
			"desc": "Event Tick in 'EventGraph' has no connected logic but still runs every frame.",
			"rule_id": "BP-PERF-008"
		},
		{
			"level": "warning",
			"type": "Unused Function",
			"desc": "Function 'someUnusedMethod' is never called.",
			"rule_id": "BP-UNUSED-FN-001"
		},
		{
			"level": "warning",
			"type": "Unused Function",
			"desc": "Function 'unusedEvent' is never called.",
			"rule_id": "BP-UNUSED-FN-001"
		}
	]
};})();